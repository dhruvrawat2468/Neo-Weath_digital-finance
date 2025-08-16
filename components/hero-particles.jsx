"use client"

import { useRef, useEffect, useState } from "react"

export default function Component() {
  const canvasRef = useRef(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setIsMobile(window.innerWidth < 768) // Set mobile breakpoint
    }

    updateCanvasSize()

    let particles = []

    let textImageData = null

    function createTextImage() {
      if (!ctx || !canvas) return 0

      ctx.fillStyle = "white"
      ctx.save()

      const logoHeight = isMobile ? 90 : 150 // Increased text size by 30px from original values (60px mobile -> 90px, 120px desktop -> 150px)
      const neoLogoWidth = logoHeight * (40 / 19.7762) // Maintain aspect ratio for Neo text

      ctx.font = `${logoHeight}px Arial, sans-serif`
      const wealthMetrics = ctx.measureText("Wealth")
      const wealthLogoWidth = wealthMetrics.width

      const logoSpacing = isMobile ? 30 : 60 // Increased gap for mobile and desktop
      const totalWidth = neoLogoWidth + wealthLogoWidth + logoSpacing

      ctx.translate(canvas.width / 2 - totalWidth / 2, canvas.height / 2 - logoHeight / 2)

      ctx.save()
      ctx.font = `${logoHeight}px Arial, sans-serif`
      ctx.textBaseline = "top"
      ctx.fillText("Neo", 0, 0)
      ctx.restore()

      ctx.save()
      ctx.translate(neoLogoWidth + logoSpacing, 0)
      ctx.font = `${logoHeight}px Arial, sans-serif`
      ctx.textBaseline = "top"
      ctx.fillText("Wealth", 0, 0)
      ctx.restore()

      ctx.restore()

      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      return 1 // Return a default scale value
    }

    function createParticle(scale) {
      if (!ctx || !canvas || !textImageData) return null

      const data = textImageData.data
      const particleGap = 2

      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)

        if (data[(y * canvas.width + x) * 4 + 3] > 128) {
          const logoHeight = isMobile ? 90 : 150 // Increased text size by 30px from original values (60px mobile -> 90px, 120px desktop -> 150px)
          const neoLogoWidth = logoHeight * (40 / 19.7762)

          ctx.font = `${logoHeight}px Arial, sans-serif`
          const wealthMetrics = ctx.measureText("Wealth")
          const wealthLogoWidth = wealthMetrics.width

          const logoSpacing = isMobile ? 30 : 60
          const totalWidth = neoLogoWidth + wealthLogoWidth + logoSpacing
          const centerX = canvas.width / 2
          const centerY = canvas.height / 2

          const isWealthText = x >= centerX + totalWidth / 2 - wealthLogoWidth

          return {
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * 1 + 0.5,
            color: "white",
            scatteredColor: isWealthText ? "#FF9900" : "#00DCFF",
            isWealth: isWealthText,
            life: Math.random() * 100 + 50,
          }
        }
      }

      return null
    }

    function createInitialParticles(scale) {
      const baseParticleCount = 7000 // Increased base count for higher density
      const particleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)))
      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle(scale)
        if (particle) particles.push(particle)
      }
    }

    let animationFrameId

    function animate(scale) {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const { x: mouseX, y: mouseY } = mousePositionRef.current
      const maxDistance = 240

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance && (isTouchingRef.current || !("ontouchstart" in window))) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * 60
          const moveY = Math.sin(angle) * force * 60
          p.x = p.baseX - moveX
          p.y = p.baseY - moveY

          ctx.fillStyle = p.scatteredColor
        } else {
          p.x += (p.baseX - p.x) * 0.1
          p.y += (p.baseY - p.y) * 0.1
          ctx.fillStyle = "white"
        }

        ctx.fillRect(p.x, p.y, p.size, p.size)

        p.life--
        if (p.life <= 0) {
          const newParticle = createParticle(scale)
          if (newParticle) {
            particles[i] = newParticle
          } else {
            particles.splice(i, 1)
            i--
          }
        }
      }

      const baseParticleCount = 7000
      const targetParticleCount = Math.floor(
        baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)),
      )
      while (particles.length < targetParticleCount) {
        const newParticle = createParticle(scale)
        if (newParticle) particles.push(newParticle)
      }

      animationFrameId = requestAnimationFrame(() => animate(scale))
    }

    const scale = createTextImage()
    createInitialParticles(scale)
    animate(scale)

    const handleResize = () => {
      updateCanvasSize()
      const newScale = createTextImage()
      particles = []
      createInitialParticles(newScale)
    }

    const handleMove = (x, y) => {
      mousePositionRef.current = { x, y }
    }

    const handleMouseMove = (e) => {
      handleMove(e.clientX, e.clientY)
    }

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    const handleTouchStart = () => {
      isTouchingRef.current = true
    }

    const handleTouchEnd = () => {
      isTouchingRef.current = false
      mousePositionRef.current = { x: 0, y: 0 }
    }

    const handleMouseLeave = () => {
      if (!("ontouchstart" in window)) {
        mousePositionRef.current = { x: 0, y: 0 }
      }
    }

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchstart", handleTouchStart)
    canvas.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return (
    <div className="relative w-full h-dvh flex flex-col items-center justify-center bg-black mb-20">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute top-0 left-0 touch-none"
        aria-label="Interactive particle effect with Neo and Wealth text"
      />
      <div className="absolute bottom-[200px] text-center z-10">
        <p className="font-mono text-gray-400 text-xs sm:text-base md:text-sm ">
          <span
           
            className="invite-link text-gray-300 text-xl hover:text-cyan-400 transition-colors duration-300"
           
          >
            Budget management
          </span>{" "}
          <span>at</span>
          <span className="transition-colors duration-300 text-xl"> ease</span> <br />
         
          <style>{`
            span.invite-link:hover + span + span {
              color: #FF9900;
            }
          `}</style>
        </p>
      </div>
    </div>
  )
}

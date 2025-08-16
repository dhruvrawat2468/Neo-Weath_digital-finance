"use client"

export default function FlipCards() {
  const cardsData = [
    {
      title: "ADVANCED ANALYTICS",
      description: "Get detailed insights into your spending patterns with AI-powered analytics",
      icon: "📊",
    },
    {
      title: "SMART RECEIPT SCANNER",
      description: "Extract data automatically from receipts using advanced AI technology",
      icon: "📱",
    },
    {
      title: "BUDGET PLANNING",
      description: "Create and manage budgets with intelligent recommendations",
      icon: "💰",
    },
    {
      title: "MULTI-ACCOUNT SUPPORT",
      description: "Manage multiple accounts and credit cards in one place",
      icon: "💳",
    },
    {
      title: "MULTI-CURRENCY",
      description: "Support for multiple currencies with real-time conversion",
      icon: "🌍",
    },
    {
      title: "AUTOMATED INSIGHTS",
      description: "Get automated financial insights and recommendations",
      icon: "⚡",
    },
  ]

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cardsData.map((card, index) => (
            <div key={index} className="card-parent">
              <div className="card">
                <div className="glass"></div>

                <div className="logo">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="circle circle3"></span>
                  <span className="circle circle4"></span>
                  <span className="circle circle5">
                    <span className="icon">{card.icon}</span>
                  </span>
                </div>

                <div className="content">
                  <span className="title">{card.title}</span>
                  <span className="text">{card.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card-parent {
          width: 290px;
          height: 300px;
          perspective: 1000px;
          margin: 0 auto;
        }

        .card {
          height: 100%;
          border-radius: 50px;
          background: linear-gradient(135deg, #0254c0ff 0%, rgba(255, 255, 255, 0.1) 100%);
          transition: all 0.5s ease-in-out;
          transform-style: preserve-3d;
          box-shadow: 
            rgba(2, 84, 192, 0.3) 40px 50px 25px -40px, 
            rgba(2, 84, 192, 0.2) 0px 25px 25px -5px,
            0 0 20px rgba(2, 84, 192, 0.4),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .glass {
          transform-style: preserve-3d;
          position: absolute;
          inset: 8px;
          border-radius: 55px;
          border-top-right-radius: 100%;
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.3) 100%);
          backdrop-filter: blur(10px);
          transform: translate3d(0px, 0px, 25px);
          border-left: 1px solid rgba(255, 255, 255, 0.3);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.5s ease-in-out;
        }

        .content {
          padding: 100px 60px 0px 30px;
          transform: translate3d(0, 0, 26px);
          position: relative;
          z-index: 10;
        }

        .content .title {
          display: block;
          color: white;
          font-weight: 900;
          font-size: 18px;
          text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.8),
            0 0 20px rgba(255, 255, 255, 0.4);
          line-height: 1.2;
        }

        .content .text {
          display: block;
          color: rgba(255, 255, 255, 0.9);
          font-size: 13px;
          margin-top: 15px;
          line-height: 1.4;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
        }

        /* Removed all bottom-related styles including social buttons and view more */

        .logo {
          position: absolute;
          right: 0;
          top: 0;
          transform-style: preserve-3d;
        }

        .logo .circle {
          display: block;
          position: absolute;
          aspect-ratio: 1;
          border-radius: 50%;
          top: 0;
          right: 0;
          box-shadow: 
            rgba(2, 84, 192, 0.3) -10px 10px 20px 0px,
            0 0 15px rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.5s ease-in-out;
        }

        .logo .circle1 {
          width: 170px;
          transform: translate3d(0, 0, 20px);
          top: 8px;
          right: 8px;
        }

        .logo .circle2 {
          width: 140px;
          transform: translate3d(0, 0, 40px);
          top: 10px;
          right: 10px;
          backdrop-filter: blur(3px);
          transition-delay: 0.4s;
        }

        .logo .circle3 {
          width: 110px;
          transform: translate3d(0, 0, 60px);
          top: 17px;
          right: 17px;
          transition-delay: 0.8s;
        }

        .logo .circle4 {
          width: 80px;
          transform: translate3d(0, 0, 80px);
          top: 23px;
          right: 23px;
          transition-delay: 1.2s;
        }

        .logo .circle5 {
          width: 50px;
          transform: translate3d(0, 0, 100px);
          top: 30px;
          right: 30px;
          display: grid;
          place-content: center;
          transition-delay: 1.6s;
          background: rgba(2, 84, 192, 0.8);
          box-shadow: 
            0 0 20px rgba(2, 84, 192, 0.6),
            0 0 30px rgba(2, 84, 192, 0.3);
        }

        .logo .circle5 .icon {
          font-size: 18px;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
        }

        .card-parent:hover .card {
          transform: rotate3d(1, 1, 0, 30deg);
          box-shadow: 
            rgba(2, 84, 192, 0.4) 30px 50px 25px -40px, 
            rgba(2, 84, 192, 0.2) 0px 25px 30px 0px,
            0 0 40px rgba(2, 84, 192, 0.6),
            0 0 60px rgba(255, 255, 255, 0.2);
        }

        /* Removed hover effects for social buttons since they no longer exist */

        .card-parent:hover .card .logo .circle2 {
          transform: translate3d(0, 0, 60px);
        }

        .card-parent:hover .card .logo .circle3 {
          transform: translate3d(0, 0, 80px);
        }

        .card-parent:hover .card .logo .circle4 {
          transform: translate3d(0, 0, 100px);
        }

        .card-parent:hover .card .logo .circle5 {
          transform: translate3d(0, 0, 120px);
          box-shadow: 
            0 0 30px rgba(2, 84, 192, 0.8),
            0 0 50px rgba(2, 84, 192, 0.5);
        }

        @media (max-width: 768px) {
          .card-parent {
            width: 260px;
            height: 280px;
          }
          
          .content {
            padding: 80px 40px 0px 25px;
          }
          
          .content .title {
            font-size: 16px;
          }
          
          .content .text {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}

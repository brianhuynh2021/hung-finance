import React from 'react'

const FloatingChatButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-40">
      {/* Zalo */}
      <a
        href="https://zalo.me/0984883750" // TODO: đổi thành số Zalo của bạn
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-[#0068FF] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        {/* Icon Zalo đơn giản */}
        <span className="bg-white text-[#0068FF] font-bold text-[9px] leading-tight px-1.5 py-0.5 rounded">
          Zalo
        </span>
      </a>

      {/* Messenger */}
      <a
        href="https://m.me/your_facebook_id" // TODO: đổi thành facebook id / page
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-[#0084FF] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        {/* Icon Messenger kiểu bubble + tia */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 text-white"
          fill="currentColor"
        >
          <path d="M16 3C9.383 3 4 8.018 4 14.25c0 3.429 1.657 6.476 4.297 8.469V29l3.938-2.168C13.61 27.056 14.788 27.25 16 27.25c6.617 0 12-5.018 12-11.25S22.617 3 16 3zm6.016 10.328l-3.344 5.305a1.25 1.25 0 0 1-1.816.312l-2.492-1.875-2.664 2.813a.75.75 0 0 1-1.23-.222l-1.688-3.938a.75.75 0 0 1 1.082-.91l2.824 1.57 2.57-2.703a1.25 1.25 0 0 1 1.727-.055l2.719 2.453 1.844-3.25a.75.75 0 1 1 1.27.75z" />
        </svg>
      </a>
    </div>
  )
}

export default FloatingChatButtons
import React from 'react'

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-20 bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + tên */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
            PVcomBank
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm sm:text-base">
              Mr. Hưng Phạm - Chuyên viên ngân hàng PVcomBank
            </span>
            <span className="text-xs text-gray-500">
              Hỗ trợ vay vốn mua nhà, đất, ô tô, kinh doanh
            </span>
          </div>
        </div>

        {/* Hotline + menu đơn giản */}
        <div className="flex items-center gap-6">
          <div className="text-right hidden sm:block">
            <div className="text-xs text-gray-500">Hotline</div>
            <a
              href="tel:0973341232"
              className="font-bold text-orange-600 text-sm sm:text-base"
            >
              0973 341 232
            </a>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-4 text-sm text-gray-700">
              <li><a href="#home" className="hover:text-orange-500">Trang chủ</a></li>
              <li><a href="#services" className="hover:text-orange-500">Gói vay</a></li>
              <li><a href="#benefits" className="hover:text-orange-500">Lợi ích</a></li>
              <li><a href="#posts" className="hover:text-orange-500">Tin tức</a></li>
              <li><a href="#contact" className="hover:text-orange-500">Liên hệ</a></li>
            </ul>
          </nav>

          <button className="md:hidden border px-3 py-1 rounded text-sm">
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
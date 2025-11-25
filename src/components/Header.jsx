import React from 'react'
import pvbLogo from '../assets/pvbLogo.png'

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-20 bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + tên */}
        <div className="flex items-center gap-2">
          <img
            src={pvbLogo}
            alt="Logo PVB"
            className="w-10 h-10 rounded-full object-cover"
          />
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

          <nav className="hidden md:flex items-center gap-8">
            {[
                { label: "Trang chủ", href: "#home" },
                { label: "Gói vay", href: "#services" },
                { label: "Lợi ích", href: "#benefits" },
                { label: "Tin tức", href: "#posts" },
                { label: "Liên hệ", href: "#contact" }
            ].map((item) => (
                <a
                key={item.href}
                href={item.href}
                className="text-gray-700 font-medium text-[15px] hover:text-orange-600 transition-colors"
                >
                {item.label}
                </a>
            ))}
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
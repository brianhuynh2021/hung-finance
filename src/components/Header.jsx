import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import pvbLogo from '../assets/pvbLogo.png'

const Header = () => {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { label: 'Trang chủ', type: 'route', to: '/' },
    { label: 'Gói vay', type: 'hash', href: '/#services' },
    { label: 'Lợi ích', type: 'hash', href: '/#benefits' },
    { label: 'Tin tức', type: 'route', to: '/tin-tuc' },
    { label: 'Liên hệ', type: 'hash', href: '/#contact' },
  ]

  return (
    <header
      className="w-full sticky top-0 z-20 bg-white shadow"
      data-aos="fade-down"
    >
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
              Mr. Hưng Phạm - Chuyên viên ngân hàng PVCOMBANK
            </span>
            <span className="text-xs text-gray-500">
              Hỗ trợ vay vốn mua nhà, đất, ô tô, kinh doanh
            </span>
          </div>
        </div>

        {/* Hotline + menu */}
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

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              if (item.type === 'route') {
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-gray-700 font-medium text-[15px] hover:text-orange-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 font-medium text-[15px] hover:text-orange-600 transition-colors"
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md animate-slideDown">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {menuItems.map((item) => {
              if (item.type === 'route') {
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm text-gray-700 font-medium border-b border-gray-100 last:border-b-0"
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-gray-700 font-medium border-b border-gray-100 last:border-b-0"
                >
                  {item.label}
                </a>
              )
            })}

            <div className="pt-2 text-sm">
              Hotline:{' '}
              <a
                href="tel:0973341232"
                className="font-semibold text-orange-600"
              >
                0973 341 232
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
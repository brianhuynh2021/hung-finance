import React from 'react'
import { FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hàng chính: thông tin + social */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Bên trái: thông tin */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1">
              THE CHAP 247 — Dịch vụ tư vấn vay vốn cá nhân
            </h3>
            <p className="text-sm text-gray-600">
              Chuyên viên:{' '}
              <span className="font-semibold text-gray-800">
                Mr. Hưng Phạm – Ngân hàng PVB
              </span>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Hotline:{' '}
              <a
                href="tel:0973341232"
                className="font-semibold text-orange-600 hover:underline"
              >
                0973 341 232
              </a>
            </p>
          </div>

          {/* Bên phải: social */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-sm font-semibold text-gray-700">
              Kết nối với tôi
            </p>
            <div className="flex items-center gap-3">
              {/* Zalo */}
              <a
                href="https://zalo.me/0973341232"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <SiZalo size={18} />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaFacebookF size={16} />
              </a>

              {/* Youtube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition"
              >
                <FaYoutube size={18} />
              </a>

              {/* Tiktok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaTiktok size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Đường kẻ + copyright */}
        <div className="mt-6 border-t border-gray-200 pt-3 text-xs text-gray-500 text-center">
          © 2025 thechap247.com
        </div>
      </div>
    </footer>
  )
}

export default Footer
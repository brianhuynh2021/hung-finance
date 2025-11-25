import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-white mb-2">
            CÔNG TY CỔ PHẦN TM-DV NHÂN TECH
          </h3>
          <p>
            Hotline: <span className="font-semibold">0379.689068</span>
          </p>
          <p>
            Chat Zalo:{' '}
            <a href="#" className="underline text-orange-400">
              Ấn vào đây
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">CHÍNH SÁCH &amp; QUY ĐỊNH</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                Chính sách điều khoản
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Chính sách vận chuyển
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Chính sách đổi trả
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">KẾT NỐI VỚI CHÚNG TÔI</h3>
          <p>Facebook • Youtube • Tiktok</p>
        </div>
      </div>
      <div className="border-t border-gray-800 py-3 text-center text-xs text-gray-500">
        ©2025 Hưng Phạm Finance • Tư vấn vay vốn & tài chính cá nhân.
      </div>
    </footer>
  )
}

export default Footer

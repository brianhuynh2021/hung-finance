import React from 'react'
import pvbNhaDat from '../assets/pvbNhaDat.png'

const Banner = () => {
  return (
    <section
      id="home"
      className="bg-gray-50 border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            MR. HƯNG CHUYÊN VIÊN NGÂN HÀNG PVcomBank
            <span className="block text-orange-500">
              HỖ TRỢ TÀI CHÍNH MUA NHÀ, ĐẤT, Ô TÔ, KINH DOANH
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Lãi suất thấp chỉ từ <span className="font-semibold">7.2% - 8.2%/năm</span>
          </p>

          <ul className="text-sm text-gray-700 space-y-1 mb-6">
            <li>• Thủ tục đơn giản, giải ngân nhanh.</li>
            <li>• Hỗ trợ hồ sơ khó, nợ xấu vẫn có giải pháp.</li>
            <li>• Hỗ trợ vay toàn quốc, ưu tiên Hồ Chí Minh và khu vực lân cận.</li>
            <li>• Hạn mức vay lên đến 80% giá trị tài sản đảm bảo.</li>
            <li>• Thời hạn vay tối đa 30 năm, trả góp linh hoạt hàng tháng.</li>
          </ul>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="tel:0973341232"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full text-sm sm:text-base"
            >
              GỌI NGAY
            </a>
            <a
              href="#contact"
              className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-5 py-2 rounded-full text-sm sm:text-base"
            >
              Đăng ký nhận tư vấn
            </a>
          </div>
        </div>

        {/* Ảnh minh hoạ */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src={pvbNhaDat}
            alt="Hình minh hoạ vay vốn"
            className="w-[360px] rounded-3xl shadow-xl object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default Banner
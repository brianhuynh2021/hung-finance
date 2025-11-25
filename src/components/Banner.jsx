import React from 'react'

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
            Lãi suất thấp chỉ từ <span className="font-semibold">7.2% - 8.2%/năm</span> •
            Thủ tục đơn giản, giải ngân nhanh • Hỗ trợ hồ sơ khó, nợ xấu vẫn có giải pháp.
          </p>

          <ul className="text-sm text-gray-700 space-y-1 mb-6">
            <li>• Hỗ trợ vay toàn quốc, ưu tiên Hồ Chí Minh và khu vực lân cận.</li>
            <li>• Hạn mức vay lên đến 80% giá trị tài sản đảm bảo.</li>
            <li>• Thời hạn vay tối đa 30 năm, trả góp linh hoạt hàng tháng.</li>
          </ul>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="tel:0973341232"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full text-sm md:text-base"
            >
              GỌI NGAY TƯ VẤN
            </a>
            <a
              href="#contact"
              className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-5 py-2 rounded-full text-sm md:text-base"
            >
              Đăng ký nhận tư vấn
            </a>
          </div>
        </div>

        {/* Ảnh minh hoạ */}
        <div className="hidden md:flex justify-center">
          <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-orange-400 to-blue-500 shadow-lg flex items-center justify-center text-white text-xl font-semibold text-center px-6">
            Vay mua nhà, đất, ô tô, kinh doanh
            <span className="block text-sm mt-2 font-normal">
              Lãi suất ưu đãi - Thủ tục nhanh gọn
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
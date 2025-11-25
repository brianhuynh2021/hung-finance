import React from 'react'

import landImg from '../assets/services/land.png'
import houseImg from '../assets/services/house.png'
import businessImg from '../assets/services/business.png'
import carImg from '../assets/services/car.png'

const services = [
  {
    key: 'land',
    image: landImg,
    title: 'Hỗ trợ mua đất - Tài chính từ 500 triệu trở lên',
    desc: 'Hồ sơ duyệt nhanh trong 2 ngày, phù hợp khách hàng có nhu cầu mua đất nền, đất dự án.',
    bullets: [
      {
        text: 'Hồ sơ duyệt nhanh trong 2 ngày',
      },
      {
        text: 'Lãi suất: 6.2% 6 tháng, 7.2% 12 tháng, 8.2% 24 tháng',
        highlight: true,
      },
      {
        text: 'Ân hạn gốc đến 24 tháng',
      },
      {
        text: 'Hỗ trợ chứng minh thu nhập, hồ sơ khó',
      },
    ],
  },
  {
    key: 'house',
    image: houseImg,
    title: 'Gói tài chính mua nhà, sửa chữa nhà - Hỗ trợ từ 500 triệu trở lên',
    desc: 'Phù hợp khách hàng mua nhà ở, nhà phố, căn hộ, hoặc cần vốn sửa chữa, hoàn thiện nhà.',
    bullets: [
      {
        text: 'Hồ sơ duyệt nhanh trong 2 ngày',
      },
      {
        text: 'Lãi suất: 6.2% 6 tháng, 7.2% 12 tháng, 8.2% 24 tháng',
        highlight: true,
      },
      {
        text: 'Thời hạn vay tối đa 30 năm',
      },
      {
        text: 'Hạn mức tối đa 80% giá trị tài sản đảm bảo',
      },
    ],
  },
  {
    key: 'business',
    image: businessImg,
    title: 'Hỗ trợ vay kinh doanh - Thế chấp BĐS',
    desc: 'Bổ sung vốn lưu động, đầu tư mở rộng kinh doanh, tối ưu dòng tiền cho hộ kinh doanh & doanh nghiệp nhỏ.',
    bullets: [
      {
        text: 'Hỗ trợ tài chính từ 500 triệu trở lên',
      },
      {
        text: 'Lãi suất: 7.2% 6 tháng, 7.7% 9 tháng, 8.2% 12 tháng',
        highlight: true,
      },
      {
        text: 'Hồ sơ đơn giản, không cần báo cáo tài chính quá phức tạp',
      },
      {
        text: 'Hộ khẩu tỉnh vẫn được hỗ trợ (tùy trường hợp)',
      },
    ],
  },
  {
    key: 'car',
    image: carImg,
    title: 'Hỗ trợ tài chính mua ô tô, tối đa 80% giá trị xe',
    desc: 'Phù hợp khách hàng mua xe phục vụ nhu cầu đi lại, công việc, kinh doanh dịch vụ.',
    bullets: [
      {
        text: 'Hồ sơ duyệt nhanh trong 2 ngày',
      },
      {
        text: 'Lãi suất: 6.3% 6 tháng, 7.3% 12 tháng',
        highlight: true,
      },
      {
        text: 'Thời gian vay tối đa 96 tháng (8 năm)',
      },
      {
        text: 'Hồ sơ đơn giản, không cần chứng minh thu nhập quá phức tạp',
      },
    ],
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-800">
          CÁC GÓI HỖ TRỢ TÀI CHÍNH NGÂN HÀNG PVcomBank
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-sm md:text-base">
          Tùy theo nhu cầu: mua đất, mua nhà, mua ô tô, vay kinh doanh… Mr. Hưng Phạm sẽ tư vấn
          gói vay, thời hạn, lãi suất và phương án tối ưu cho bạn.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map(service => (
            <article
              key={service.key}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full"
            >
              {/* Ảnh */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover transform hover:scale-[1.03] transition-transform duration-300"
                />
              </div>

              {/* Nội dung */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3">
                  {service.desc}
                </p>

                <ul className="space-y-1.5 text-xs md:text-sm text-gray-700 mb-4">
                  {service.bullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-[3px] text-orange-500 text-sm">⚡</span>
                      <span
                        className={
                          item.highlight
                            ? 'font-semibold text-orange-600'
                            : ''
                        }
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Nút */}
                <div className="mt-auto flex gap-3">
                  <a
                    href="tel:0379689068"
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-sm font-semibold py-2 rounded-full text-center transition-colors"
                  >
                    GỌI NGAY
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 border border-orange-500 text-orange-600 hover:bg-orange-50 text-xs md:text-sm font-semibold py-2 rounded-full text-center transition-colors"
                  >
                    TƯ VẤN
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
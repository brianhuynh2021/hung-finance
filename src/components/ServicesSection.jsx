import React from 'react'
import services from '../data/services.json'

// Import ảnh tĩnh (Vite cần đường dẫn tĩnh lúc build)
import landImg from '../assets/services/land.png'
import houseImg from '../assets/services/house.png'
import businessImg from '../assets/services/business.png'
import carImg from '../assets/services/car.png'

// Tập ảnh để random đẹp mắt
const imagePool = [landImg, houseImg, businessImg, carImg]

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-center mb-8 text-gray-800">
          CÁC GÓI HỖ TRỢ TÀI CHÍNH NGÂN HÀNG PVCOMBANK
        </h2>

        <div className="space-y-2 mb-8">
          <p className="text-center text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
            Tùy theo nhu cầu: mua đất, mua nhà, mua ô tô, vay kinh doanh…
          </p>
          <div className="notice-container max-w-4xl mx-auto flex justify-center">
            <p className="notice-text text-orange-600 font-semibold text-sm sm:text-base text-center px-3">
              Hồ sơ duyệt nhanh trong 2 ngày
            </p>
          </div>
        </div>

        <div className="grid gap-7 sm:gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.key}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 flex flex-col h-full animate-[fadeInUp_0.4s_ease]"
            >
              {/* Ảnh */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={imagePool[Math.floor(Math.random() * imagePool.length)]}
                  alt={service.title}
                  className="w-full h-36 sm:h-44 object-cover transform hover:scale-[1.05] transition-transform duration-300"
                />
              </div>

              {/* Nội dung */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-orange-600 text-sm sm:text-base mb-2 leading-snug text-center">
                  {service.title}
                </h3>

                {/* Bỏ phần mô tả desc theo yêu cầu */}

                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700 mb-4">
                  {service.bullets.map((txt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-[3px] text-orange-500 text-sm">✔</span>
                      <span className={
                        txt.toLowerCase().includes('lãi suất')
                          ? 'font-bold text-orange-600 animate-pulse transition-all duration-300'
                          : ''
                      }>
                        {txt}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Nút */}
                <div className="mt-auto flex gap-3 pt-2">
                  <a
                    href="tel:0973341232"
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold py-2 rounded-full text-center transition-colors"
                  >
                    GỌI NGAY
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 border border-orange-500 text-orange-600 hover:bg-orange-50 text-xs sm:text-sm font-semibold py-2 rounded-full text-center transition-colors"
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

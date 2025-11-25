import React from 'react'
import services from '../data/services.json'

// Import ảnh tĩnh (Vite cần đường dẫn tĩnh lúc build)
import landImg from '../assets/services/land.png'
import houseImg from '../assets/services/house.png'
import businessImg from '../assets/services/business.png'
import carImg from '../assets/services/car.png'

const imageMap = {
  land: landImg,
  house: houseImg,
  business: businessImg,
  car: carImg,
}

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-800">
          CÁC GÓI HỖ TRỢ TÀI CHÍNH NGÂN HÀNG PVcomBank
        </h2>

        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-sm md:text-base">
          Tùy theo nhu cầu: mua đất, mua nhà, mua ô tô, vay kinh doanh…
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.key}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full"
            >
              {/* Ảnh */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={imageMap[service.key]}
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
                  {service.bullets.map((txt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-[3px] text-orange-500 text-sm">⚡</span>
                      <span
                        className={
                          idx === service.highlightIndex
                            ? 'font-semibold text-orange-600'
                            : ''
                        }
                      >
                        {txt}
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

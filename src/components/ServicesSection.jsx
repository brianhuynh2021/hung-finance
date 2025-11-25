import React from 'react'

const services = [
  {
    title: 'Hỗ trợ mua đất',
    desc: 'Tài chính từ 500 triệu trở lên, duyệt nhanh trong 2 ngày.',
    bullets: [
      'Lãi suất: 6.2% (6 tháng), 7.2% (12 tháng), 8.2% (24 tháng).',
      'Ân hạn gốc lên đến 24 tháng.',
      'Hỗ trợ chứng minh thu nhập, hồ sơ khó.',
    ],
  },
  {
    title: 'Hỗ trợ mua nhà',
    desc: 'Vay mua nhà ở, nhà phố, nhà dự án, căn hộ.',
    bullets: [
      'Hạn mức đến 80% giá trị tài sản.',
      'Thời hạn vay tối đa 30 năm.',
      'Trả góp linh hoạt theo tháng.',
    ],
  },
  {
    title: 'Vay kinh doanh',
    desc: 'Bổ sung vốn lưu động, đầu tư mở rộng kinh doanh.',
    bullets: [
      'Không yêu cầu báo cáo tài chính quá phức tạp.',
      'Hỗ trợ tài sản đảm bảo đa dạng.',
      'Có giải pháp cho khách hàng nợ xấu nhóm 2,3 (tùy trường hợp).',
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
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Tùy theo nhu cầu: mua đất, mua nhà, mua ô tô, vay kinh doanh… Mr. Hưng Phạm sẽ tư vấn
          gói vay, thời hạn, lãi suất và phương án tối ưu cho bạn.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <h3 className="font-semibold text-gray-800 mb-1 text-base md:text-lg">
                {s.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
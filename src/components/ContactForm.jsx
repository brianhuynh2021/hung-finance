import React, { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(false)

    // TODO: nối API backend sau
    console.log({ name, phone, email, note })
    setSubmitted(true)
    setName('')
    setPhone('')
    setEmail('')
    setNote('')
  }

  return (
    <section id="contact" className="bg-orange-50 w-full" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            ĐĂNG KÝ NHẬN TƯ VẤN VAY VỐN
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4">
            Hãy để lại thông tin, Mr. Hưng Phạm sẽ chủ động liên hệ, tư vấn gói vay phù hợp nhất
            với thu nhập, tài sản và kế hoạch của bạn.
          </p>
          <ul className="text-xs sm:text-sm text-gray-700 space-y-1.5">
            <li>• Tư vấn miễn phí 100%.</li>
            <li>• Bảo mật tuyệt đối thông tin khách hàng.</li>
            <li>• Ưu tiên xử lý hồ sơ đăng ký online.</li>
          </ul>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-md p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4"
          >
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Họ tên *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Nhập họ tên của bạn"
                autoComplete="name"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Số điện thoại *
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Ví dụ: 0909..."
                autoComplete="tel"
                pattern="^[0-9]{9,11}$"
                title="Số điện thoại từ 9–11 chữ số"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Email (nếu có)
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Nhu cầu vay
              </label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500 min-h-[80px]"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ví dụ: vay mua đất Bình Dương, cần 1 tỷ, thời hạn 15 năm..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg text-sm sm:text-base transition-colors"
            >
              GỬI THÔNG TIN
            </button>

            {submitted && (
              <p className="text-xs text-green-600 mt-2">
                Đã gửi thông tin (demo). Mr. Hưng Phạm sẽ liên hệ với bạn sớm nhất có thể.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
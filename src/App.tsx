import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  WashingMachine, 
  Leaf, 
  Clock, 
  ShieldCheck, 
  Shirt, 
  Footprints, 
  Phone, 
  MapPin, 
  Menu,
  X,
  CheckCircle2,
  Star,
  Droplets,
  ChevronRight
} from 'lucide-react';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
              <span className="font-black text-2xl tracking-tight text-blue-950 uppercase">
                Everrise Eco Wash
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollTo('features')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Điểm nổi bật</button>
              <button onClick={() => scrollTo('services')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Dịch vụ</button>
              <button onClick={() => scrollTo('pricing')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Bảng giá</button>
              <button onClick={() => scrollTo('contact')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Liên hệ</button>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-blue-200"
              >
                Đặt lịch ngay
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4 shadow-xl"
          >
            <button onClick={() => scrollTo('features')} className="block w-full text-left px-4 py-2 text-slate-600 font-medium">Điểm nổi bật</button>
            <button onClick={() => scrollTo('services')} className="block w-full text-left px-4 py-2 text-slate-600 font-medium">Dịch vụ</button>
            <button onClick={() => scrollTo('pricing')} className="block w-full text-left px-4 py-2 text-slate-600 font-medium">Bảng giá</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left px-4 py-2 text-slate-600 font-medium">Liên hệ</button>
            <div className="pt-2">
              <button 
                onClick={() => {
                  setIsBookingOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-medium"
              >
                Đặt lịch ngay
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-sky-50/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern laundry interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
                <Leaf className="w-4 h-4" />
                <span>Giải pháp giặt giũ xanh & sạch</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                Giặt Giũ Thảnh Thơi <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                  Sống Xanh Mỗi Ngày
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Everrise Eco Wash mang đến dịch vụ giặt là cao cấp và chăm sóc giày chuyên sâu. Bảo vệ trang phục của bạn bằng công nghệ thân thiện với môi trường.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                >
                  Đặt lịch ngay <ChevronRight className="w-5 h-5" />
                </button>
                <button onClick={() => scrollTo('services')} className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center">
                  Tìm hiểu thêm
                </button>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>Mở cửa 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>Giao nhận tận nơi</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-sky-100 rounded-[3rem] transform rotate-3 scale-105 opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop" 
                alt="Premium laundry service" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-500">
                  <Star className="w-8 h-8 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                  <div className="text-sm text-slate-500 font-medium">Đánh giá từ khách hàng</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tại sao chọn Everrise Eco Wash?</h2>
            <p className="text-lg text-slate-600">Chúng tôi không chỉ làm sạch quần áo, chúng tôi chăm sóc chúng bằng công nghệ tiên tiến và dung dịch an toàn nhất.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8 text-blue-600" />,
                title: "Eco-Friendly",
                desc: "Sử dụng dung dịch giặt sinh học, an toàn cho da nhạy cảm và thân thiện với môi trường."
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-600" />,
                title: "Nhanh Chóng",
                desc: "Hệ thống máy giặt sấy công nghiệp hiện đại, hoàn thành mẻ giặt chỉ trong 60 phút."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
                title: "Kháng Khuẩn UV",
                desc: "Công nghệ sấy diệt khuẩn bằng tia UV, loại bỏ 99.9% vi khuẩn và nấm mốc."
              },
              {
                icon: <Droplets className="w-8 h-8 text-blue-600" />,
                title: "Chăm Sóc Chuyên Sâu",
                desc: "Phân loại và xử lý riêng biệt cho từng chất liệu vải cao cấp: lụa, len, da."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-900/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dịch Vụ Của Chúng Tôi</h2>
              <p className="text-lg text-slate-400">Giải pháp toàn diện cho mọi nhu cầu làm sạch của bạn, từ quần áo mặc hàng ngày đến đồ hiệu đắt tiền.</p>
            </div>
            <button className="text-blue-400 font-medium hover:text-blue-300 flex items-center gap-2">
              Xem tất cả dịch vụ <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Service 1 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl overflow-hidden hover:bg-slate-800 transition-colors">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Giặt là cao cấp" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <Shirt className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Giặt Là Cao Cấp</h3>
                <p className="text-slate-400 mb-6">Chăm sóc chuyên biệt cho vest, lụa, dạ, lông vũ. Sử dụng dung môi giặt khô an toàn, giữ form dáng hoàn hảo.</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Tẩy điểm vết bẩn cứng đầu</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Là hơi công nghiệp phẳng phiu</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Đóng gói cẩn thận, treo móc</li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl overflow-hidden hover:bg-slate-800 transition-colors">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1925&auto=format&fit=crop" 
                  alt="Vệ sinh giày" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <Footprints className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Vệ Sinh Giày Chuyên Sâu</h3>
                <p className="text-slate-400 mb-6">Làm sạch thủ công tỉ mỉ cho mọi loại giày: Sneaker, giày da, giày lộn. Khử mùi và sấy khô bằng tia UV.</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Dung dịch làm sạch chuyên dụng</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Tẩy ố đế, phục hồi màu sắc</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Phủ nano chống nước (tùy chọn)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bảng Giá Tham Khảo</h2>
            <p className="text-lg text-slate-600">Minh bạch, rõ ràng và xứng đáng với chất lượng dịch vụ bạn nhận được.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-blue-600 rounded-3xl p-8 shadow-xl shadow-blue-200 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-amber-950 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Phổ biến nhất
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Giặt Là Cao Cấp</h3>
              <p className="text-blue-100 text-sm mb-6">Dành cho đồ âu, vest, váy dạ hội</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">69k</span>
                <span className="text-blue-100"> / áo sơ mi</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                  <span className="text-blue-50">Áo Vest / Dạ: từ 150k</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                  <span className="text-blue-50">Tẩy điểm chuyên sâu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                  <span className="text-blue-50">Là hơi, treo móc, bọc nilon</span>
                </li>
              </ul>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-white text-blue-700 font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors"
               >
                Đặt lịch
              </button>
            </div>

            {/* Plan 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Vệ Sinh Giày</h3>
              <p className="text-slate-500 text-sm mb-6">Làm sạch sâu, phục hồi diện mạo</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">69k</span>
                <span className="text-slate-500"> / đôi</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600">Sneaker vải/lưới: 69k</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600">Giày da/lộn cao cấp: 150k</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600">Khử mùi, sấy UV diệt khuẩn</span>
                </li>
              </ul>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-slate-100 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-200 transition-colors"
               >
                Đặt lịch
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-6">Cần báo giá cho đồ cồng kềnh (chăn ga, rèm cửa) hoặc số lượng lớn?</p>
            <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
              <Phone className="w-5 h-5" /> Liên hệ tư vấn ngay
            </button>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Sẵn sàng trải nghiệm dịch vụ?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Đặt lịch thu gom tận nơi hoặc ghé thăm cửa hàng của chúng tôi ngay hôm nay. Everrise Eco Wash luôn sẵn sàng phục vụ bạn.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl flex items-center justify-center gap-2"
            >
              Đặt lịch ngay
            </button>
            <button className="bg-blue-700 text-white border border-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> 0968 314 666
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-black text-xl text-white tracking-tight uppercase">
                  Everrise Eco Wash
                </span>
              </div>
              <p className="mb-6 max-w-sm">
                Giải pháp giặt giũ xanh, sạch và thông minh. Chúng tôi cam kết mang lại chất lượng tốt nhất cho trang phục của bạn.
              </p>
              <div className="flex space-x-4">
                {/* Social icons placeholders */}
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white cursor-pointer transition-colors">
                  <span className="font-bold">f</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white cursor-pointer transition-colors">
                  <span className="font-bold">ig</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Liên Hệ</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Số 157, đường Ngô Thì Sỹ, TDP Hồng Phong, Phường Hà Đông, Hà Nội.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>0968 314 666</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Mở cửa: 24/7</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Dịch Vụ</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Giặt là cao cấp</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Vệ sinh giày</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Giặt chăn ga gối</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Giao nhận tận nơi</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 Everrise Eco Wash. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
              <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
      </footer>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}

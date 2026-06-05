"use client";

import React, { useState } from "react";
import {
  Activity,
  Clock,
  Coins,
  ShieldCheck,
  MapPin,
  Phone,
  Heart,
  Stethoscope,
  Menu,
  X,
  Award,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Pill,
  Thermometer,
  UserCheck,
  AlertTriangle
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const whatsappLink = "https://wa.me/6281234567890?text=Halo%20Marfuah%20Medika,%20saya%20ingin%20tanya/booking%20jadwal%20pemeriksaan.";

  const benefits = [
    {
      icon: <UserCheck className="w-8 h-8 text-brand-blue-500" />,
      title: "Dikelola Langsung oleh Apoteker",
      subtitle: "Mardiana Fuad, S.Farm.",
      description: "Konsultasi obat terjamin aman, akurat, dan tepercaya secara medis langsung dengan apoteker berlisensi."
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-emerald-500" />,
      title: "Buka Sampai Malam / Sesuai Shift",
      subtitle: "Fleksibel untuk Buruh & Karyawan",
      description: "Cocok untuk Anda yang baru pulang kerja pabrik sore atau malam hari. Kami mengerti waktu berharga Anda."
    },
    {
      icon: <Coins className="w-8 h-8 text-brand-amber-500" />,
      title: "Harga Jujur Ramah Kantong",
      subtitle: "Biaya Transparan & Bersahabat",
      description: "Biaya pemeriksaan dan alat kesehatan sangat bersahabat bagi kantong pekerja pabrik dan warga sekitar."
    }
  ];

  const services = [
    {
      title: "Cek Gula Darah, Asam Urat, & Kolesterol Instan",
      badge: "Mulai Rp10.000-an!",
      description: "Pemeriksaan cepat hanya 5 menit menggunakan alat steril standar medis. Hasil langsung keluar beserta penjelasan artinya.",
      icon: <Activity className="w-6 h-6 text-brand-blue-500" />,
      tag: "Terlaris"
    },
    {
      title: "Cek Tensi Darah & Konsultasi Obat GRATIS",
      badge: "GRATIS Selamanya",
      description: "Pantau tekanan darah Anda secara rutin untuk cegah hipertensi. Konsultasi cara minum obat yang benar langsung gratis.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-emerald-500" />,
      tag: "Favorit"
    },
    {
      title: "Menyediakan Alat Kesehatan Ringan",
      badge: "Lengkap & Berkualitas",
      description: "Menyediakan korset pinggang (penting untuk yang sering berdiri/angkat beban), masker medis anti-debu Cakung, termometer, oximeter, dan kotak P3K.",
      icon: <Thermometer className="w-6 h-6 text-brand-amber-500" />,
      tag: "Kebutuhan Kerja"
    },
    {
      title: "Jasa Homecare & Manajemen Obat",
      badge: "Keluarga Tenang",
      description: "Bantuan penataan kotak obat mingguan (pill planner) untuk orang tua/keluarga agar tidak salah dosis, serta kunjungan pemeriksaan ke rumah.",
      icon: <Pill className="w-6 h-6 text-brand-blue-700" />,
      tag: "Layanan Khusus"
    }
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Operator Pabrik KBN Cakung",
      comment: "Sering pegal-pegal dan pusing setelah shift malam. Ke Marfuah Medika praktis banget, bisa cek tensi gratis dan konsultasi obat pegal linu yang aman buat ginjal. Harganya jujur!",
      rating: 5
    },
    {
      name: "Siti Rahma",
      role: "Warga Cakung Barat",
      comment: "Sangat terbantu untuk manajemen obat ibu saya yang rutin minum obat tensi dan gula. Ditata rapi per hari di pill planner oleh Ibu Apoteker, jadi tidak pernah salah minum obat lagi.",
      rating: 5
    },
    {
      name: "Rian Hidayat",
      role: "Pekerja Logistik Jl. Raya Bekasi",
      comment: "Korset pinggang yang saya beli di sini awet banget, membantu sekali pas angkat barang berat di gudang. Apotekernya ramah dan penjelasannya mudah dimengerti.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Apakah perlu membuat janji (booking) terlebih dahulu?",
      answer: "Tidak wajib. Anda bisa langsung datang ke lokasi. Namun, bagi Anda yang memiliki jadwal shift pabrik yang ketat, disarankan untuk booking antrean via WhatsApp terlebih dahulu agar langsung dilayani tanpa mengantre."
    },
    {
      question: "Berapa biaya untuk konsultasi obat?",
      answer: "Konsultasi obat dengan Apoteker Mardiana Fuad sepenuhnya GRATIS untuk setiap pemeriksaan tensi darah maupun cek lab instan. Kami ingin memastikan Anda minum obat dengan aman."
    },
    {
      question: "Di mana lokasi persis Pos Sehat Marfuah Medika?",
      answer: "Kami berlokasi di area strategis Cakung, Jakarta Timur, dekat dengan kawasan KBN Cakung dan Jl. Raya Bekasi. Akses mudah dijangkau dengan motor maupun jalan kaki dari pemukiman warga."
    },
    {
      question: "Apakah melayani kunjungan ke rumah (homecare)?",
      answer: "Ya, kami melayani jasa homecare dan pengaturan obat (pill planner) ke rumah untuk pasien lansia atau keluarga yang kesulitan bepergian di area Cakung dan sekitarnya."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-emerald-100 selection:text-brand-emerald-700">
      
      {/* 0. STICKY HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 shadow-md shadow-brand-blue-500/20 text-white">
              <Stethoscope className="h-6 w-6" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-brand-blue-900">
                Marfuah <span className="text-brand-emerald-600">Medika</span>
              </span>
              <p className="text-[10px] -mt-1 font-medium text-slate-500">Pos Sehat & Homecare Cakung</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#tentang" className="hover:text-brand-blue-500 transition-colors">Kenapa Kami</a>
            <a href="#layanan" className="hover:text-brand-blue-500 transition-colors">Layanan</a>
            <a href="#promo" className="hover:text-brand-blue-500 transition-colors">Promo Buruh</a>
            <a href="#faq" className="hover:text-brand-blue-500 transition-colors">Tanya Jawab</a>
            <a href="#kontak" className="hover:text-brand-blue-500 transition-colors">Lokasi</a>
          </nav>

          {/* Header CTA */}
          <div className="hidden md:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-emerald-600 px-5 py-2 text-sm font-bold text-white shadow-md shadow-brand-emerald-600/10 hover:bg-brand-emerald-700 hover:shadow-lg hover:shadow-brand-emerald-700/20 transition-all duration-200"
            >
              <Phone className="h-4 w-4 fill-white" />
              <span>Daftar / Booking WA</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden animate-in fade-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-4 text-base font-semibold">
              <a
                href="#tentang"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-brand-blue-500 transition-all"
              >
                Kenapa Kami
              </a>
              <a
                href="#layanan"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-brand-blue-500 transition-all"
              >
                Layanan
              </a>
              <a
                href="#promo"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-brand-blue-500 transition-all"
              >
                Promo Buruh
              </a>
              <a
                href="#faq"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-brand-blue-500 transition-all"
              >
                Tanya Jawab
              </a>
              <a
                href="#kontak"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-brand-blue-500 transition-all"
              >
                Lokasi & Kontak
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-emerald-600 py-3 text-center text-sm font-bold text-white hover:bg-brand-emerald-700 transition-all shadow-md"
              >
                <Phone className="h-4 w-4 fill-white" />
                <span>Hubungi / Booking via WA</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-50 via-white to-slate-50 py-16 lg:py-24">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-brand-blue-100/40 blur-3xl lg:h-96 lg:w-96" />
        <div className="absolute bottom-10 left-0 -z-10 h-72 w-72 rounded-full bg-brand-emerald-50/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue-100/80 px-4 py-1.5 text-xs font-bold text-brand-blue-800 shadow-sm border border-brand-blue-200/50">
                <MapPin className="h-3.5 w-3.5 text-brand-blue-600" />
                <span>Dekat KBN Cakung & Pemukiman Warga</span>
              </div>

              {/* Catchy headline */}
              <h1 className="text-3xl font-extrabold tracking-tight text-brand-blue-950 sm:text-4xl md:text-5xl lg:leading-[1.15]">
                BADAN PEGAL & SERING LEMBUR?{" "}
                <span className="block mt-1 bg-gradient-to-r from-brand-blue-700 via-brand-blue-600 to-brand-emerald-600 bg-clip-text text-transparent">
                  YUK, CEK KESEHATAN DI MARFUAH MEDIKA! 🩺
                </span>
              </h1>

              {/* Subheadline/Greeting */}
              <div className="text-base font-semibold text-slate-700 sm:text-lg max-w-2xl mx-auto lg:mx-0">
                Halo Rekan-Rekan Pekerja Pabrik dan Warga Cakung, Jakarta Timur! 👋 
                <p className="block mt-2 font-normal text-slate-600">
                  Sering merasa pusing setelah shift malam, badan pegal-pegal karena berdiri lama di pabrik, atau punya orang tua yang rutin minum obat tapi bingung mengatur jadwalnya?
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 max-w-xl mx-auto lg:mx-0">
                Sekarang tidak perlu jauh-jauh macet-macetan ke klinik atau antre lama! 
                <strong> Pos Sehat Marfuah Medika (Alkes & Homecare)</strong> kini hadir di dekat tempat tinggal Anda, siap melayani dengan cepat, profesional, dan ramah kantong.
              </p>

              {/* Hero Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <div className="relative group">
                  {/* Glowing background effect for high-conversion pulsing green button */}
                  <div className="absolute -inset-1 rounded-full bg-brand-emerald-500 opacity-70 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />
                  
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center gap-3 rounded-full bg-brand-emerald-600 px-8 py-4 text-base font-extrabold text-white shadow-xl hover:bg-brand-emerald-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <Phone className="h-5 w-5 fill-white animate-bounce" />
                    <span>Hubungi / Booking Antrean via WA</span>
                  </a>
                </div>

                <a
                  href="#layanan"
                  className="inline-flex items-center gap-1.5 px-6 py-3.5 text-sm font-bold text-brand-blue-800 rounded-full border border-brand-blue-200 bg-white shadow-sm hover:bg-brand-blue-50 transition-all duration-200"
                >
                  <span>Lihat Layanan & Tarif</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              {/* Trust markers */}
              <div className="grid grid-cols-3 gap-4 border-t border-slate-200/80 pt-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <p className="text-xl font-bold text-brand-blue-900">100%</p>
                  <p className="text-xs text-slate-500 font-medium">Aman & Higienis</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xl font-bold text-brand-blue-900">Buka</p>
                  <p className="text-xs text-slate-500 font-medium">Hingga Malam Hari</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xl font-bold text-brand-blue-900">GRATIS</p>
                  <p className="text-xs text-slate-500 font-medium">Tensi & Konsultasi</p>
                </div>
              </div>
            </div>

            {/* Right Column: Stylized interactive mockup visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl bg-slate-900/5 p-2 shadow-inner">
                {/* Simulated Smartphone Frame */}
                <div className="relative rounded-[2.5rem] bg-white border-[10px] border-slate-900 shadow-2xl overflow-hidden aspect-[9/18] flex flex-col">
                  {/* Notch */}
                  <div className="absolute top-0 inset-x-0 h-4 bg-slate-900 flex justify-center items-center z-20">
                    <div className="w-20 h-3 bg-black rounded-b-xl" />
                  </div>

                  {/* App Screen Content */}
                  <div className="flex-1 bg-gradient-to-b from-brand-blue-950 to-brand-blue-900 text-white pt-6 flex flex-col">
                    {/* Header */}
                    <div className="px-5 pt-3 pb-2 flex items-center justify-between border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <Heart className="h-5 w-5 text-brand-emerald-500 fill-brand-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold tracking-wider">MARFUAH MEDIKA</span>
                      </div>
                      <span className="rounded-full bg-brand-emerald-500/20 px-2 py-0.5 text-[8px] font-bold text-brand-emerald-400 uppercase tracking-widest border border-brand-emerald-500/20">
                        Online
                      </span>
                    </div>

                    {/* App Content Body */}
                    <div className="flex-1 px-4 py-4 space-y-4 overflow-y-auto text-slate-300 text-xs">
                      
                      {/* Active Patient Queue Card */}
                      <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-3.5 space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-white text-[11px] uppercase tracking-wide">Status Antrean Hari Ini</p>
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-[10px] text-slate-400">Antrean Aktif</p>
                            <p className="text-2xl font-black text-white">#08</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] text-slate-400">Estimasi Menunggu</p>
                            <p className="font-bold text-brand-emerald-400">~ 5 Menit</p>
                          </div>
                        </div>
                      </div>

                      {/* Health Alert Bar (Amber accent) */}
                      <div className="rounded-xl bg-brand-amber-500/20 border border-brand-amber-500/30 p-3 flex items-start gap-2.5">
                        <AlertTriangle className="h-4.5 w-4.5 text-brand-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-brand-amber-500 text-[11px]">Pegel & Pusing Selesai Shift?</p>
                          <p className="text-[10px] text-slate-300 leading-normal">Jangan tunda! Cek tensi darah Anda secara dini, GRATIS di pos sehat kami.</p>
                        </div>
                      </div>

                      {/* Interactive Health Test Tool Preview */}
                      <div className="rounded-2xl bg-white text-slate-900 p-3.5 shadow-md space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <Activity className="h-4 w-4 text-brand-blue-500" />
                            <span className="font-bold text-[11px] text-brand-blue-900">Simulasi Tarif Cek Lab</span>
                          </div>
                          <span className="rounded bg-brand-emerald-50 px-1.5 py-0.5 text-[9px] font-bold text-brand-emerald-700">Murah</span>
                        </div>
                        
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[11px] border-b border-slate-100 pb-1">
                            <span className="text-slate-500">Tensi Darah & Konsultasi</span>
                            <span className="font-bold text-brand-emerald-600">GRATIS</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] border-b border-slate-100 pb-1">
                            <span className="text-slate-500">Cek Gula Darah Instan</span>
                            <span className="font-bold">Rp 15.000</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] border-b border-slate-100 pb-1">
                            <span className="text-slate-500">Cek Asam Urat Instan</span>
                            <span className="font-bold">Rp 15.000</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-500">Cek Kolesterol Instan</span>
                            <span className="font-bold">Rp 25.000</span>
                          </div>
                        </div>

                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full rounded-xl bg-brand-blue-600 py-2.5 text-center text-[10px] font-bold text-white hover:bg-brand-blue-700 transition-colors shadow"
                        >
                          Booking Lewat WhatsApp
                        </a>
                      </div>

                    </div>

                    {/* App Footer */}
                    <div className="p-3 bg-white/5 border-t border-white/5 text-center text-[9px] text-slate-400">
                      Dikelola oleh Mardiana Fuad, S.Farm. (Apoteker)
                    </div>
                  </div>
                </div>

                {/* Decorative floating badges */}
                <div className="absolute -left-10 top-1/4 rounded-2xl bg-white p-3 shadow-xl border border-slate-100 flex items-center gap-2 animate-bounce-slow">
                  <div className="rounded-full bg-brand-emerald-100 p-1.5">
                    <CheckCircle2 className="h-5 w-5 text-brand-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Tensi Darah</p>
                    <p className="text-xs font-black text-slate-800">100% GRATIS</p>
                  </div>
                </div>

                <div className="absolute -right-8 bottom-1/4 rounded-2xl bg-white p-3 shadow-xl border border-slate-100 flex items-center gap-2">
                  <div className="rounded-full bg-brand-amber-100 p-1.5">
                    <Clock className="h-5 w-5 text-brand-amber-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Jam Buka</p>
                    <p className="text-xs font-black text-slate-800">Buka S/D Malam</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RAMP POINT ALERT: Relatable Problem Banner (Amber/Orange accent) */}
      <section className="bg-gradient-to-r from-brand-amber-50 to-amber-100/70 border-y border-brand-amber-100 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="rounded-full bg-brand-amber-500/20 p-3 text-brand-amber-600 shrink-0">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-brand-amber-600 uppercase tracking-wider">PERHATIAN BAGI PEKERJA SHIFT & LEMBUR</h3>
                <p className="text-sm font-medium text-slate-700 mt-0.5">
                  Berdiri terlalu lama, angkat beban berat, atau kerja larut malam memicu tekanan darah tinggi dan pegal kronis. Deteksi dini sekarang sebelum mengganggu produktivitas kerja demi keluarga!
                </p>
              </div>
            </div>
            <a
              href="#layanan"
              className="rounded-full bg-brand-amber-600 px-6 py-2.5 text-xs font-extrabold text-white shadow hover:bg-brand-amber-700 transition-colors whitespace-nowrap"
            >
              Cek Solusi Kesehatan Kami
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US SECTION */}
      <section id="tentang" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-blue-500">Kelebihan Kami</h2>
            <p className="text-3xl font-extrabold text-brand-blue-950 sm:text-4xl">
              Kenapa Harus Cek Kesehatan di Marfuah Medika?
            </p>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-blue-500 to-brand-emerald-500 rounded-full mx-auto" />
            <p className="text-slate-600 text-sm sm:text-base">
              Kami berkomitmen memberikan pelayanan kesehatan primer yang mudah diakses, ramah di kantong buruh, dan teruji secara medis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group relative rounded-3xl bg-slate-50 p-8 border border-slate-200/50 hover:border-brand-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-brand-blue-500/5 transition-all duration-300"
              >
                <div className="mb-6 rounded-2xl bg-white p-4 w-fit shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-extrabold text-brand-blue-950">{benefit.title}</h3>
                <p className="text-xs font-bold text-brand-emerald-600 mt-1 uppercase tracking-wide">{benefit.subtitle}</p>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="layanan" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-emerald-600">Layanan Kami</h2>
            <p className="text-3xl font-extrabold text-brand-blue-950 sm:text-4xl">
              Pemeriksaan Kesehatan & Alat Medis
            </p>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-emerald-500 to-brand-blue-500 rounded-full mx-auto" />
            <p className="text-slate-600 text-sm sm:text-base">
              Pilihan layanan terbaik yang dirancang khusus untuk kenyamanan dan kesehatan harian Anda sekeluarga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group flex flex-col md:flex-row gap-6 bg-white rounded-3xl p-6 border border-slate-200/40 hover:border-brand-emerald-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="rounded-2xl bg-slate-50 p-4 h-fit w-fit shrink-0 border border-slate-100 group-hover:bg-brand-emerald-50 transition-colors">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-brand-blue-500 uppercase tracking-widest bg-brand-blue-50 px-2 py-0.5 rounded border border-brand-blue-100">
                      {service.tag}
                    </span>
                    <span className="text-xs font-extrabold text-brand-emerald-700 bg-brand-emerald-50 px-3 py-1 rounded-full border border-brand-emerald-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-brand-blue-950 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick WA CTA inside Services */}
          <div className="mt-12 text-center">
            <p className="text-sm font-semibold text-slate-500">Konsultasi keluhan penyakit atau obat Anda secara langsung</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-brand-emerald-600 font-extrabold hover:text-brand-emerald-700 transition-colors group text-base"
            >
              <span>Hubungi Kami Sekarang Lewat WA</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF: Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-blue-500">Testimoni</h2>
            <p className="text-3xl font-extrabold text-brand-blue-950 sm:text-4xl">
              Kata Rekan Kerja & Warga Cakung
            </p>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-blue-500 to-brand-emerald-500 rounded-full mx-auto" />
            <p className="text-slate-600 text-sm sm:text-base">
              Ratusan buruh pabrik dan warga telah mempercayakan pengecekan kesehatan harian mereka kepada kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((t, index) => (
              <div 
                key={index} 
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200/50 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-brand-amber-500 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm italic leading-relaxed">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>
                <div className="border-t border-slate-200 mt-6 pt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-blue-100 flex items-center justify-center font-bold text-brand-blue-700 text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-blue-950 text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROMO SECTION */}
      <section id="promo" className="py-12 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Dashboard/Ticket style container */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue-950 to-brand-blue-900 text-white border-2 border-dashed border-brand-amber-500/40 p-8 sm:p-12 shadow-2xl">
            {/* Absolute accent shapes */}
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-brand-emerald-500/10 blur-2xl" />
            <div className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-brand-amber-500/10 blur-2xl" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Promo description */}
              <div className="md:col-span-7 space-y-4 text-center md:text-left">
                <span className="inline-block rounded-full bg-brand-amber-500/20 px-4 py-1 text-xs font-bold text-brand-amber-500 uppercase tracking-widest border border-brand-amber-500/30 animate-pulse">
                  🎁 Promo Spesial Warga Cakung
                </span>
                <h3 className="text-2xl font-black tracking-tight sm:text-3xl text-white">
                  PAKET SEHAT BURUH KBN
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
                  Dirancang khusus bagi rekan pekerja pabrik yang sering lembur. Dapatkan paket pemeriksaan lengkap meliputi: 
                  <strong> Tensi Darah + Cek Gula Darah Instan + Konsultasi Obat Privat</strong> dengan apoteker kami.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10 text-white">Tensi Darah</span>
                  <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10 text-white">Cek Gula Darah</span>
                  <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10 text-white">Konsultasi</span>
                </div>
              </div>

              {/* Price & CTA Ticket side */}
              <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
                <p className="text-xs text-slate-400 font-medium">Tarif Normal Rp30.000</p>
                <div className="mt-1 flex items-baseline justify-center gap-1">
                  <span className="text-lg font-bold text-slate-300">Rp</span>
                  <span className="text-4xl font-black tracking-tight text-brand-emerald-400">15.000</span>
                  <span className="text-xs font-bold text-brand-emerald-400">nett</span>
                </div>
                <p className="text-[10px] text-brand-amber-500 font-semibold mt-1">Hanya berlaku dengan menunjukkan banner ini</p>
                
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-brand-emerald-600 py-3.5 text-center text-sm font-extrabold text-white shadow-lg shadow-brand-emerald-600/30 hover:bg-brand-emerald-700 transition-colors"
                >
                  <Phone className="h-4 w-4 fill-white" />
                  <span>Klaim Voucher Promo via WA</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-blue-500">Tanya Jawab</h2>
            <p className="text-3xl font-extrabold text-brand-blue-950 sm:text-4xl">
              Pertanyaan yang Sering Diajukan
            </p>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-blue-500 to-brand-emerald-500 rounded-full mx-auto" />
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-brand-blue-950 hover:bg-slate-100/70 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-brand-blue-500 font-extrabold text-lg shrink-0 ml-4">
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </button>
                
                {activeFaq === index && (
                  <div className="px-6 pb-5 text-sm text-slate-600 border-t border-slate-200/50 pt-4 bg-white animate-in slide-in-from-top duration-200">
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER & LOCATION SECTION */}
      <section id="kontak" className="relative bg-brand-blue-950 text-white overflow-hidden py-16">
        
        {/* Visual Map & Address Grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Address card & details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-emerald-600 text-white shadow-lg">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xl font-black tracking-tight text-white">
                    Marfuah <span className="text-brand-emerald-400">Medika</span>
                  </span>
                  <p className="text-xs font-semibold text-slate-400">Alkes & Layanan Homecare</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-brand-emerald-500 pl-4 py-1 italic text-slate-300 text-sm">
                &ldquo;Kesehatan adalah modal utama untuk bekerja demi keluarga. Yuk, jaga kesehatanmu di Marfuah Medika!&rdquo;
              </blockquote>

              <div className="space-y-4 text-sm text-slate-300 pt-2">
                
                {/* Location Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-white">Alamat Kami di Cakung:</h4>
                    <p className="mt-1 text-slate-300 leading-relaxed">
                      Jl. Raya Bekasi KM 21, Rawa Terate, Kec. Cakung, Jakarta Timur 13920 (Dekat Kawasan Industri KBN Cakung)
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-brand-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-white">Jam Operasional:</h4>
                    <p className="mt-1 text-slate-300">Setiap Hari: 08.00 WIB - 21.00 WIB</p>
                    <p className="text-xs text-brand-amber-500 font-semibold mt-0.5">*(Bisa menyesuaikan shift pabrik via WhatsApp)</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-brand-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-white">WhatsApp & Booking Antrean:</h4>
                    <p className="mt-1 text-slate-300">Hubungi Apoteker Mardiana Fuad:</p>
                    <a 
                      href={whatsappLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 text-brand-emerald-400 font-extrabold hover:underline mt-1 text-base"
                    >
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right side: Stylized interactive map component */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-md overflow-hidden shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-slate-800 aspect-[16/9] flex items-center justify-center">
                  
                  {/* Google Maps mock/real iframe integration */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.73379169618!2d106.9142750379659!3d-6.206413247076326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4ad5947bb37%3A0x63bf8e49b80e42d7!2sKawasan%20Berikat%20Nusantara%20(KBN)%20Cakung!5e0!3m2!1sid!2sid!4v1717623910000!5m2!1sid!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Marfuah Medika Cakung"
                    className="absolute inset-0 grayscale contrast-125 opacity-80"
                  ></iframe>

                  {/* Visual Map Pin Overlay overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
                    <div className="relative flex justify-center items-center">
                      <span className="absolute inline-flex h-10 w-10 rounded-full bg-brand-emerald-500 opacity-60 animate-ping" />
                      <div className="relative z-10 h-8 w-8 rounded-full bg-brand-emerald-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                        <Stethoscope className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="mt-1.5 rounded-lg bg-slate-900/90 text-white px-2.5 py-1 text-[10px] font-extrabold tracking-wider uppercase border border-white/20 whitespace-nowrap shadow-md">
                      Marfuah Medika
                    </div>
                  </div>
                </div>

                {/* Address Helper buttons */}
                <div className="mt-3.5 flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>Klik peta untuk memperbesar & navigasi GPS</span>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-emerald-400 font-bold hover:underline"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Copyright line */}
          <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-slate-500">
            <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Marfuah Medika. Hak Cipta Dilindungi Undang-Undang.</p>
            <p className="mt-1">
              Desain Premium untuk Kesehatan Rekan Buruh Pabrik & Warga Cakung, Jakarta Timur.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

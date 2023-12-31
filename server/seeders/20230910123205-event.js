'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("events", [
      {
        title: "Mekari Week: Exploring the Role of AI in the Workforce Productivity",
        image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F565108719%2F998707907843%2F1%2Foriginal.20230731-063751?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C4500%2C2250&s=1093f8d3ee5a05ee7f1b206f87ebfc0f",
        summary: "Akhir-akhir Ini Ngerasa Kinerja Tim Lagi Gak Produktif? Penasaran Gimana Cara AI Membantu Masalah Anda? Temukan Jawabannya di Acara Ini!",
        description: "AI adalah sebuah topik yang semakin populer untuk dibahas di kalangan masyarakat. Walaupun AI membawa banyak dampak positif, namun tidak sedikit juga efek negatif yang dibawakan oleh kehadiran AI ini, apalagi setelah dilihat pengaplikasian AI ternyata sangatlah banyak dan beragam di berbagai industry. Pada acara ini kami akan membahas peran dan dampak AI pada industry tenaga kerja, hadirilah acara kami dan perkaya diri anda dengan informasi hingga siap menghadapi kehadiran AI ini.",
        price: 0,
        categoryId: 8,
        address: "Microsoft Indonesia, No.Kav 52-53 Jalan Jendral Sudirman, Kec kby. Baru, Daerah Khusus Ibukota Jakarta 12190",
        cityId: 1,
        dateTimeStart:
          "2023-08-02 16:30"
        ,
        dateTimeEnd: "2023-08-02 19:30",
        discount: 0,
        count: 0,
        max: 10,
        userId: 3,
      },
      {
        title: "Indonesian 4.0 Conference & Expo 2023",
        image: "https://cdn-az.allevents.in/events5/banners/f368361f3b5f52c528df9c6026c0328dfe9e1ea1ae9a977f93a6bd31afc58684-rimg-w1200-h675-gmir.jpg",
        summary: "Get ready to witness the future of Indonesia's industrial revolution at the Indonesia 4.0 Conference & Expo 2023, happening on August 23-24",
        description: "Industrial revolution ialah salah satu perubahan terbesar dalam sejarah manusia, melalui revolusi tersebut tingkat teknologi manusia berkembang dengan pesat dan membawa dampak perubahan yang besar. Sekarang kita berada diambang perubahan revolusi digital 4.0 yang juga mempunyai potensi untuk membawa dampak dramatis pada lingkungan bisnis Indonesia, hadirilah acara kami dan bekali diri sendiri dengan ilmu-ilmu relevan untuk memanfaatkan industry 4.0 yang akan datang ini.",
        price: 0,
        categoryId: 3,
        address: "JIEXPO Kemayoran Jl. H. Benyamin Suaeb, Jakarta Pusat 14410",
        cityId: 1,
        dateTimeStart:
          "2023-08-23 09:00"
        ,
        dateTimeEnd: "2023-08-24 17:00",
        discount: 0,
        count: 2,
        max: 10,
        userId: 2,
      },
      {
        title: "Congress of Indonesian Diaspora 7 (CID-7)",
        image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F549138649%2F1639231545823%2F1%2Foriginal.20230705-203239?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=19%2C0%2C1322%2C661&s=151659bfd39e6689ca0014831bba9fb3",
        summary: "Congress of Indonesian Diaspora 7: Empowering Indonesian Diaspora in the Strategy for Nation Branding Towards Indonesia 2045",
        description: "Congress of Indonesian Diaspora kembali diadakan pada tanggal 12 Agustus 2023, dengan mengangkat tema identitas yakni National Branding, dengan melihat tingkat kompetetifnya Indonesia dan juga berupaya meningkatkan imagenya pada level internasional untuk mencapai visi Indonesia 2045. Pada acara ini kami akan memperlihatkan berbagai upaya upaya dari kalangan diaspora Indonesia di berbagai belahan dunia dan kegiatan mereka dalam upaya mendorong pembangunan brand nasional Indonesia dari berbagai segi, selain itu juga ada banyak pembicara pembicara yang merupakan leading figures dalam bidangnya dari berbagai sumber di Indonesia yang akan hadir dan membawakan acara ini.",
        price: 0,
        categoryId: 3,
        address: "THE HALL BALLROOM - SENAYAN CITY Lot 19 No Kecamatan Tanah Abang, Daerah Khusus Ibukota Jakarta 10270",
        cityId: 1,
        dateTimeStart:
          "2023-08-12 09:00"
        ,
        dateTimeEnd: "2023-08-12 17:00",
        discount: 0,
        count: 3,
        max: 10,
        userId: 1,
      },
      {
        title: "IndoSec 2023",
        image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F545248399%2F1367565260943%2F1%2Foriginal.20230629-062206?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C50%2C1600%2C800&s=f32878bcd2c82791617d3c428e966e11",
        summary: "Tradepass is hosting the 6th edition IndoSec on 29-30 August 2023 at The Ritz-Carlton Jakarta, Pacific Place.",
        description: "To promote collaboration between the public and private sectors and curb the efforts of malicious sectors Tradepass is hosting the 6th edition Indosec on August of 2023. The event will host up to 700+ cybersecurity experts including heads of information security, risks, compliance, forensics, and cyber laws from leading figures in both the prive and public sectors.",
        price: 0,
        categoryId: 8,
        address: "The Ritz-Carlton Jakarta, Pacific Place Jalan Jendral sudirman kav 52-53 Kec. Kby. Baru, Daerah Khusus Ibukota Jakarta 12190",
        cityId: 5,
        dateTimeStart:
          "2023-08-29 08:00"
        ,
        dateTimeEnd: "2023-08-31 21:00",
        discount: 0,
        count: 3,
        max: 10,
        userId: 1,
      },
      {
        title: "FIL Jakarta: Tech Fantasy 2023",
        image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F561593229%2F1498146012223%2F1%2Foriginal.20230725-114809?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C8334%2C4167&s=26cd89c2644014a1b22df007919a4d86",
        summary: "FILJakarta is an free event for all to learn and explore the uses of blockchain technology, hosted by Filecoin and organized by Metapals!",
        description: "Step into an extraordinary tech event in which Web3, gaming, and tech communities converges to empower developers. Get ready to immerse yourself in cutting-edge innovations, insightful discussions as well as hands-on workshops by leading industry experts. This is a celebration of creativity and knowledge exchange that will ignite your passion for pushing the boundaries of technology.",
        price: 70000,
        categoryId: 8,
        address: "Soehanna Hall 11A, Jalan Jendral sudirman kav 52-53 #Lt.2 Kec. Kby. Baru, Daerah Khusus Ibukota Jakarta 12190",
        cityId: 5,
        dateTimeStart:
          "2023-09-02 09:00"
        ,
        dateTimeEnd: "2023-09-02 18:00",
        discount: 15,
        count: 3,
        max: 10,
        userId: 1,
      },
      {
        title: "International Education Expo",
        image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F555615029%2F474262468963%2F1%2Foriginal.20230715-070516?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=975261b91ff300e57dfd90351b0fd092",
        summary: "Ingin kuliah di luar negeri? Butuh LoA untuk pendaftaran beasiswa? Yuk ikuti expo ini!",
        description: "Edukasi ialah sebuah proses penting yang kelak akan menentukan hidup seseorang di masa yang akan datang, dengan adanya edukasi tinggi dan berkualitas seorang pasti akan dapat menjamin sebuah kehidupan yang baik bagi dirinya dan keluarga, oleh karena itu pertimbangkan dengan baiklah pilihan pilihan karir dan edukasi anda! Pada International Educations Expo ini kami akan membawakan perkembangan-perkembangan terbaru, pilihan-pilihan karir terbaik dan juga kesempatan bagi anda untuk meraih edukasi yang benar untuk anda bersama partner-parner expo kami.",
        price: 0,
        categoryId: 4,
        address: "Hotel Trivago, Jalan Jendral Sudirman, Daerah Khusus Ibukota Jakarta",
        cityId: 5,
        dateTimeStart:
          "2023-08-18 18:00"
        ,
        dateTimeEnd: "2023-08-18 21:00",
        discount: 0,
        count: 1,
        max: 10,
        userId: 2,
      },
      {
        title: "INDONESIA DIGITAL TECHNOLOGY EXPO 2023",
        image: "https://www.gotekno.id/wp-content/uploads/2023/06/https___cdn.evbuc_.com_images_465436789_677573321953_1_original.jpeg",
        summary: "An event that brought together business, Digital Lifestyle technology and innovation Collide in INDITEX 2023",
        description: "Indonesia Digital Technology Expo adalah sebuah ajang event yang akan mempertemukan bisnis, digital lifestyle dan inovasi, dengan adanya acara ini banyak kesempatan-kesempatan emas yang akan terbuka bagi para peserta yang hadir dan juga partner-partner kami agar sama-sama dapat memajukan diri dan bangsa.",
        price: 50000,
        categoryId: 8,
        address: "President University Convention Center, Jalan Haji Usmar Ismail Blok D No. 7, Mekarmukti, Kec. Cikarang Utara Kabupaten Bekasi, Jawa Barat 17530",
        cityId: 1,
        dateTimeStart:
          "2023-08-23 10:00"
        ,
        dateTimeEnd: "2023-08-24 18:00",
        discount: 20,
        count: 2,
        max: 10,
        userId: 3,
      },
      {
        title: "Mindful Meditation",
        image: "https://cdn-az.allevents.in/events5/banners/19a33734b3d14fc3f4079ef7e0f71ac808a5eea3e2569acdcf21dfb141f787f1-rimg-w960-h720-gmir.jpg?v=1690999459",
        summary: "Meditasi memberikan kesempatan bagi para praktisi untuk menenangkan diri dan mengontrol stress, datanglah dan pelajari cara-cara meditasi terbaik kami!",
        description: "Menjaga kesehatan fisik sering kali menjadi satu-satunya hal yang dipikiran masyarakat saat membicarakan perihal kesehatan, namun ternyata menjaga kesehatan psikis juga merupakan suatu hal penting yang turut perlu diperhatikan. Meditasi merupakan salah satu cara termudah untuk menjaga kesehatan mental, hanya memerlukan konsentrasi dan waktu sebentar, yuk registrasi ke event kami agar anda dapat belajar cara melakukan meditasi dan segera rasakan keuntungannya.",
        price: 0,
        categoryId: 7,
        address: "Verizon Event Space, RW.5, North Cipete, Kebayoran Baru, South Jakarta City, Jakarta 12150",
        cityId: 1,
        dateTimeStart:
          "2023-08-09 17:30"
        ,
        dateTimeEnd: "2023-08-09 20:00",
        discount: 0,
        count: 3,
        max: 10,
        userId: 1,
      },
      {
        title: "Garuda Indonesia: TravelFair - The Biggest Travel Deals",
        image: "https://i0.wp.com/pointsgeek.id/wp-content/uploads/2022/10/Screen-Shot-2022-10-16-at-08.07.29.png?fit=667%2C385&ssl=1",
        summary: "Jika anda sedang memimpikan wisata berikut anda, datanglah ke event kami agar segera terwujud",
        description: "Garuda Indonesia kembali mengadakan travel fair yang dijamin meriah dan menarik! Travel fair kali ini juga tidak lupa menghadirkan travel deals terbesar yang pernah anda lihat, jadi tunggu apalagi ayo daftar dan hadiri event kami.",
        price: 50000,
        categoryId: 7,
        address: "Balai Kartini, Jl. Gatot Subroto No.6, RT.6/RW.3, Kuningan, East Kuningan, Setiabudi, South Jakarta City, Jakarta 12950",
        cityId: 1,
        dateTimeStart:
          "2023-10-28 08:30"
        ,
        dateTimeEnd: "2023-10-30 17:00",
        discount: 5,
        count: 3,
        max: 10,
        userId: 2,
      },
      {
        title: "Permata Bank: Travel Fair 2023",
        image: "https://inspirasi.dwidayatour.co.id/wp-content/uploads/2022/04/Blog-Banner-1920x1080-PermataBank-TF-01-1.jpg",
        summary: "Permata Bank mempersembahkan Travel Fair 2023!!",
        description: "Permata Bank selaku salah satu institusi bank terbesar di Indonesia kali ini kembali mengadakan travel fair 2023 yang tentunya lengkap dengan penawaran penawaran traveling yang menarik dan juga hot deals dan promo yang pastinya akan cocok bagi semua hadirin sekalian! Tunggu apalagi ayo daftar dan hadiri acaranya sekarang juga!",
        price: 0,
        categoryId: 7,
        address: "Dwidaya Tour Office, Pagedangan, Tangerang Regency, Banten 15339",
        cityId: 1,
        dateTimeStart:
          "2023-08-04 08:00"
        ,
        dateTimeEnd: "2023-08-07 19:00",
        discount: 0,
        count: 2,
        max: 10,
        userId: 2,
      },
      {
        title: "The Gaikindo International Auto Show",
        image: "https://indonesiaautoshow.com/wp-content/uploads/2023/05/Web-Home-Banner-01.jpg",
        summary: "The annual world-class auto show is back and its better than ever!",
        description: "Gaikindo Auto Show is one of the premier leading auto shows in Indonesia, with events being held yearly each better and more festive than the last! Join us now to witness the showcase and displays of the most modern cars with elegandt designs, futuristic features that is sure to be eye-catching and breathtaking!",
        price: 100000,
        categoryId: 8,
        address: "Indonesia Convention Center, Kab. Tangerang",
        cityId: 1,
        dateTimeStart:
          "2023-08-10 08:00"
        ,
        dateTimeEnd: "2023-08-20 19:00",
        discount: 15,
        count: 4,
        max: 10,
        userId: 5,
      },
      {
        title: "China Trade Expo 2023",
        image: "https://jadwalevent.web.id/wp-content/uploads/2023/07/China-Trade-Expo.jpg",
        summary: "China Trade Expo 2023 akan memamerkan ratusan produk Elektronik menarik dan inovasi Elektronik terbaru dari 250+ Exhibitor dari China, Malaysia, dan Indonesia.",
        description: "China adalah sebuah negara yang telah mengalami perkembangan penduduk dan ekonomi yang pesat dalam beberapa tahun silam, pertumbuhan luar biasa inilah yang membuat China banyak dijadikan partner bisnis dan investasi di berbagai negara. Indonesia pun tidak melewatkan kesempatan untuk bekerja sama dan menjalin hubungan bisnis yang baik dengan China, dan dengan adanya China Trade Expo 2023 ini kami menyiapkan kesempatan unik bagi anda para pelaku bisnis di Indonesia untuk memulai menjalin koneksi bisnis dan juga supplychain kepada negara tirai bambu.",
        price: 0,
        categoryId: 3,
        address: "Jakarta International Expo, Kemayoran, Jakarta Pusat 14410",
        cityId: 1,
        dateTimeStart:
          "2023-08-24 08:00"
        ,
        dateTimeEnd: "2023-08-26 19:00",
        discount: 0,
        count: 2,
        max: 10,
        userId: 1,
      },
      {
        title: "Food Beverage Indonesia",
        image: "https://jadwalevent.web.id/wp-content/uploads/2023/06/WEB-BANNER-FBI-1498-X-587-230518.jpg",
        summary: "Food + Beverage Indonesia berfokus pada bahan-bahan makanan, peralatan, teknologi, dan sistem produksi untuk pemrosesan, serta bahan pengemasan.",
        description: "Food+Beverage Indonesia menjadi tempat untuk memperkenalkan produk terbaru, mesin dan solusi terbaru yang dibutuhkan untuk menghasilkan makanan berkualitas lebih baik di Indonesia. Pameran ini juga akan menghadirkan side-event seperti Coffee & Tea Expo, Sweets & Snacks Expo, dan Organic Food Expo. Jangan lupa untuk mengunjungi Instagram kami @foodbeverageexpo.id untuk mendapatkan berita-berita expo menarik dari kami!!",
        price: 0,
        categoryId: 2,
        address: "Jakarta International Expo, Kemayoran, Jakarta Pusat 14410",
        cityId: 1,
        dateTimeStart:
          "2023-05-08 09:30"
        ,
        dateTimeEnd: "2023-05-11 19:00",
        discount: 0,
        count: 2,
        max: 10,
        userId: 2,
      },
      {
        title: "IDMA Indonesia 2023",
        image: "https://jadwalevent.web.id/wp-content/uploads/2023/05/IDMA-Indonesia.png",
        summary: "International Flour, Feed, Corn, Semolina, Rice, Bulghur Milling Machinery & Pulses, Pasta, Biscuit Technologies Exhibition",
        description: "Informasi lebih lanjut dapat ditemukan pada website kami yaitu: https://www.idmaindonesia.com/iletisim/",
        price: 0,
        categoryId: 3,
        address: "Jakarta International Expo, Kemayoran, Jakarta Pusat 14410",
        cityId: 1,
        dateTimeStart:
          "2023-10-04 08:00"
        ,
        dateTimeEnd: "2023-10-06 19:00",
        discount: 0,
        count: 3,
        max: 10,
        userId: 4,
      },
      {
        title: "Seminar Ketahanan Endpoint Prodata Manage Engine",
        image: "https://jadwalevent.web.id/wp-content/uploads/2023/05/Seminar-Prodata.jpg",
        summary: "Ikuti dan Pelajari bagaimana solusi ManageEngine Endpoint Central dengan fitur Endpoint Security, akan membantu Bapak/Ibu dalam menghadapi cyber attack.",
        description: "Industri IT di Indonesia tentunya sudah berkembang dengan pesat, dan ditengah kesibukan kegiatan bisnis dan pertumbuhan lingkunan bisnis Indonesia tentunya perihal keamanan server dan endpoint telah menjadi sebuah topik relevan yang aman penting dan diangkat-angkat oleh para expert TI, dengan maraknya serangan cyber secara global pada tahun tahun silam, sudah saatnya industri TI Indonesia bergerak untuk meningkatkan keamanan operasi mereka yang dimulai dengan menjaga akses endpoint.",
        price: 50000,
        categoryId: 8,
        address: "J.W. Marriot, Kuningan, Jakarta Selatan 12950",
        cityId: 5,
        dateTimeStart:
          "2024-05-23 08:00"
        ,
        dateTimeEnd: "2024-05-23 19:00",
        discount: 10,
        count: 1,
        max: 10,
        userId: 4,
      },
      {
        title: "Global Sources Electronic Indonesia 2023",
        image: "https://www.jcc.co.id/userfiles/post/648c1094e2d25.jpg",
        summary: "Experience world-class sourcing for consumer electronics, mobile electronics, and electronic components right on your doorstep in Jakarta!",
        description: "Temukan informasi lebih lanjut melalui website kami yaitu www.globalsources.com/trade-fair/indonesia-show/",
        price: 50000,
        categoryId: 8,
        address: "Balai Sidang Jakarta Convention Centre, Exhibition Hall A+B, Jakarta Pusat 10270",
        cityId: 1,
        dateTimeStart:
          "2023-12-06 10:00"
        ,
        dateTimeEnd: "2023-12-08 21:00",
        discount: 20,
        count: 3,
        max: 10,
        userId: 5,
      },
      {
        title: "Jakarta Auto Week 2024",
        image: "https://www.jcc.co.id/userfiles/post/63bbe33973a55.jpg",
        summary: "AUTOMOTIVE X LIVESTYLE!",
        description: "Jakarta Auto Week will act as a comprehensive and compact automotive exhibition, that showcase a wide range of automotive products. Held in Jakarta, Jakarta Auto Week will serve as strategic platform to encourage car sales, as well to intoduce the latest automotive products to potential audience. The extensive auto show, will feature variety of lifestyle sectors and highligjht characteristics of the Indonesian urban society. The 9-days events provide a platform for automotive industry to collaborate with lifestyle industry, as well to provide an inspiring atmosphere and exciting entertainments.",
        price: 50000,
        categoryId: 8,
        address: "Jakarta International Expo Hall A1, Kemayoran, Jakarta Pusat 14410",
        cityId: 1,
        dateTimeStart:
          "2023-03-11 10:00"
        ,
        dateTimeEnd: "2023-03-19 22:00",
        discount: 20,
        count: 3,
        max: 10,
        userId: 5,
      },
      {
        title: "The 21 Indonesia Agro Food Expo 2023",
        image: "https://exhibition.jiexpo.com/wp-content/uploads/sites/5/2023/07/UNTUK-WEBSITE.jpg",
        summary: "Indonesia International Agriculture Food & Beverage Industry Exhibition",
        description: "Indonesia tentunya sudah dikenal sebagai negara kesatuan yang beragam akan budaya dan kultur, tentunya juga terkenal di bagian kuliner. Pada kesempatan ini The 21st Indonesia Agro-Food Expo memberi kesempatan unik kepada para pengunjung untuk mengenal lebih baik dan juga merasakan sendiri beragam-ragam makanan kuliner dan minuman khas Indonesia, baik yang sudah sangat populer digemari di Indonesia dan secara Internasional hingga juga kuliner lain yang mungkin masih belum mendapatkan perhatian yang sepantasnya, semua ini ada dalam acara kami! Ayo segera daftarkan diri anda dan ajaklah teman, dan keluarga untuk mengunjungi Agro Food Expo.",
        price: 0,
        categoryId: 3,
        address: "Jakarta International Expo Hall A1, Kemayoran, Jakarta Pusat 14410",
        cityId: 1,
        dateTimeStart:
          "2023-08-13 10:00"
        ,
        dateTimeEnd: "2023-08-13 17:00",
        discount: 0,
        count: 1,
        max: 10,
        userId: 2,
      },
      {
        title: "Industrial Transformation Indonesia & Indonesia's Comprehensive Trade Event For Industry",
        image: "https://exhibition.jiexpo.com/wp-content/uploads/sites/5/2023/07/cover_jiexpo_1.png",
        summary: "Indonesia's Largest B2B Collaboration for Digital Transformation and Technology!",
        description: "Perkembangan tekonologi semakin cepat, setiap tahun ada saja teknologi, penemuan, ataupun sistem informasi baru yang dapat mempengaruhi lingkungan bisnis dalam cara yang banyak, oleh karena itu penting lah bagi para pelaku bisnis di berbagai belahan dunia untuk terus memantau dan mengikuti perkembangan teknologi baru. Acara kami menampilkan berbagai perkembangan perkembangan terbaru yang tentunya relevan pada sektor-sektor bisnis terbesar di Indonesia, selain itu juga acara kami menyiapkan sebuah kesempatan bagi para hadirin untuk melakukan networking, saling bertemu dan menjalin hubungan kerjasama dengan berbagai pihak dari segala penjuru industri Indonesia. Ayo segera daftarkan diri anda dan ikuti acara kami.",
        price: 50000,
        categoryId: 8,
        address: "Jakarta International Expo Hall D1, Kemayoran, Jakarta Pusat 14410",
        cityId: 1,
        dateTimeStart:
          "2023-10-10 10:00"
        ,
        dateTimeEnd: "2023-10-11 17:00",
        discount: 10,
        count: 11,
        max: 10,
        userId: 1,
      },
      {
        title: "Van Gogh Alive Indonesia",
        image: "https://jakarta-tourism.sgp1.cdn.digitaloceanspaces.com/events/2qYpSFUAbH1EZP1eJ4ZWP7lsqReraP-metaVmFuIEdvZ2guanBn-.jpg",
        summary: "Masuki dunia di mana karya Van Gogh menjadi hidup dan interaktif!!",
        description: "Tentunya semua orang pasti pernah mendengar nama Van Gogh, seorang seniman yang namanya sudah tenar se-dunia, pada kesempatan kali Van Gogh Alive Indonesia memberi kesempatan para hadirin untuk memasuki dan mengenal lebih baik dunia karya-karya masterpiece Van Gogh! Tunggu apalagi? Ayo segera registrasi pada event kami dan juga ajak teman-teman mu.",
        price: 50000,
        categoryId: 2,
        address: "Mall Taman Anggrek, Letjen S. Parman St No.Kav 21, Jakarta Barat 11470",
        cityId: 2,
        dateTimeStart:
          "2023-09-07 09:00"
        ,
        dateTimeEnd: "2023-09-10 19:00",
        discount: 10,
        count: 1,
        max: 10,
        userId: 2,
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('events', null, {});
  }
};

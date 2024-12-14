export const products = [
	{
		id: 1,
		mainCategory: {
			id: 1,
			image: "category1.jpg",
			name_en: "Health & Wellness",
			name_bn: "স্বাস্থ্য এবং সুস্থতা",
			slug: "health-wellness",
		},
		product_code: "P001",
		product_slug: "health-supplement-01",
		product_title_en: "Organic Health Supplement",
		product_title_bn: "খেজুরি পাটালি গুড়",
		product_image: "health-supplement-01.jpg",
		product_gallery: ["supplement-01.jpg", "supplement-02.jpg"],
		regular_prices: 500,
		current_prices: 450,
		quantity: 100,
		active_status: 1,
		discount_id: 1,
		discount_amount: 50,
		discount_type: "fixed",
		product_status: "available",
		pack_size: "500g",
		product_weight: 0.5,
		product_weight_type: "kg",
		product_dec_en: "A premium organic health supplement for daily wellness.",
		product_dec_bn:
			"প্রতিদিনের সুস্থতার জন্য একটি প্রিমিয়াম অর্গানিক স্বাস্থ্য সাপ্লিমেন্ট।",
		health_benefits: {
			title_bn: "স্বাস্থ্য উপকারিতা",
			title_en: "Health Benefits",
			description_bn:
				"শরীরের শক্তি বৃদ্ধি এবং ইমিউনিটি উন্নত করার জন্য উপযোগী।",
			description_en: "Helps boost energy and improve immunity.",
		},
		brand: "Organic Life",
		vat: 15,
		vendor: "Organic Vendor",
		unit: 1,
		unit_type: "bottle",
		isComboPack: false,
		isShowing: true,
		purchase_masuring_unit: "bottle",
		searchTag: "health, supplement, organic",
		showingComboId: 0,
		sales_masuring_unit: "bottle",
	},
	{
		id: 2,
		mainCategory: {
			id: 2,
			image: "category2.jpg",
			name_en: "Electronics",
			name_bn: "ইলেকট্রনিক্স",
			slug: "electronics",
		},
		product_code: "P002",
		product_slug: "smartphone-01",
		product_title_en: "Smartphone Model X",
		product_title_bn: "স্মার্টফোন মডেল এক্স",
		product_image: "smartphone-01.jpg",
		product_gallery: ["smartphone-01.jpg", "smartphone-02.jpg"],
		regular_prices: 20000,
		current_prices: 18000,
		quantity: 50,
		active_status: 1,
		discount_id: 2,
		discount_amount: 2000,
		discount_type: "fixed",
		product_status: "available",
		pack_size: "1 unit",
		product_weight: 0.2,
		product_weight_type: "kg",
		product_dec_en: "A high-performance smartphone with a sleek design.",
		product_dec_bn: "একটি উচ্চ পারফরম্যান্স স্মার্টফোন স্লিক ডিজাইনের সাথে।",
		health_benefits: {
			title_bn: "স্বাস্থ্য উপকারিতা",
			title_en: "Health Benefits",
			description_bn: "এটি মস্তিষ্কের কার্যক্ষমতা উন্নত করতে সহায়ক।",
			description_en: "Helps improve mental focus and productivity.",
		},
		brand: "TechMaster",
		vat: 15,
		vendor: "Tech Vendor",
		unit: 1,
		unit_type: "piece",
		isComboPack: false,
		isShowing: true,
		purchase_masuring_unit: "piece",
		searchTag: "smartphone, electronics, mobile",
		showingComboId: 0,
		sales_masuring_unit: "piece",
	},
	{
		id: 3,
		mainCategory: {
			id: 3,
			image: "category3.jpg",
			name_en: "Fashion",
			name_bn: "ফ্যাশন",
			slug: "fashion",
		},
		product_code: "P003",
		product_slug: "men-jeans-01",
		product_title_en: "Men's Denim Jeans",
		product_title_bn: "পুরুষদের ডেনিম জিন্স",
		product_image: "men-jeans-01.jpg",
		product_gallery: ["men-jeans-01.jpg", "men-jeans-02.jpg"],
		regular_prices: 1500,
		current_prices: 1200,
		quantity: 75,
		active_status: 1,
		discount_id: 3,
		discount_amount: 300,
		discount_type: "fixed",
		product_status: "available",
		pack_size: "1 unit",
		product_weight: 0.8,
		product_weight_type: "kg",
		product_dec_en: "Stylish men's denim jeans with a comfortable fit.",
		product_dec_bn: "আরামদায়ক ফিট সহ স্টাইলিশ পুরুষদের ডেনিম জিন্স।",
		health_benefits: {
			title_bn: "স্বাস্থ্য উপকারিতা",
			title_en: "Health Benefits",
			description_bn: "ব্যবহারে আরামদায়ক এবং স্বাস্থ্যসম্মত।",
			description_en: "Comfortable and healthy to wear.",
		},
		brand: "FashionWave",
		vat: 15,
		vendor: "Fashion Vendor",
		unit: 1,
		unit_type: "piece",
		isComboPack: false,
		isShowing: true,
		purchase_masuring_unit: "piece",
		searchTag: "fashion, jeans, men",
		showingComboId: 0,
		sales_masuring_unit: "piece",
	},
	{
		id: 4,
		mainCategory: {
			id: 1,
			image: "category1.jpg",
			name_en: "Health & Wellness",
			name_bn: "স্বাস্থ্য এবং সুস্থতা",
			slug: "health-wellness",
		},
		product_code: "P004",
		product_slug: "multivitamins-01",
		product_title_en: "Multivitamins for Daily Health",
		product_title_bn: "প্রতিদিনের স্বাস্থ্য জন্য মাল্টিভিটামিন",
		product_image: "multivitamins-01.jpg",
		product_gallery: ["multivitamins-01.jpg", "multivitamins-02.jpg"],
		regular_prices: 800,
		current_prices: 700,
		quantity: 200,
		active_status: 1,
		discount_id: 4,
		discount_amount: 100,
		discount_type: "fixed",
		product_status: "available",
		pack_size: "30 capsules",
		product_weight: 0.1,
		product_weight_type: "kg",
		product_dec_en: "A daily multivitamin supplement for overall health.",
		product_dec_bn: "মোট স্বাস্থ্য জন্য একটি দৈনিক মাল্টিভিটামিন সাপ্লিমেন্ট।",
		health_benefits: {
			title_bn: "স্বাস্থ্য উপকারিতা",
			title_en: "Health Benefits",
			description_bn: "শক্তি বৃদ্ধি এবং ইমিউনিটি উন্নত করতে সহায়ক।",
			description_en: "Boosts energy and enhances immunity.",
		},
		brand: "HealthyLife",
		vat: 15,
		vendor: "Vitamin Vendor",
		unit: 1,
		unit_type: "bottle",
		isComboPack: false,
		isShowing: true,
		purchase_masuring_unit: "bottle",
		searchTag: "vitamins, health, supplement",
		showingComboId: 0,
		sales_masuring_unit: "bottle",
	},
	{
		id: 5,
		mainCategory: {
			id: 4,
			image: "category4.jpg",
			name_en: "Home & Kitchen",
			name_bn: "হোম এবং কিচেন",
			slug: "home-kitchen",
		},
		product_code: "P005",
		product_slug: "electric-kettle-01",
		product_title_en: "Electric Kettle 1.5L",
		product_title_bn: "ইলেকট্রিক কেটল ১.৫ লিটার",
		product_image: "electric-kettle-01.jpg",
		product_gallery: ["electric-kettle-01.jpg", "electric-kettle-02.jpg"],
		regular_prices: 1200,
		current_prices: 1000,
		quantity: 50,
		active_status: 1,
		discount_id: 5,
		discount_amount: 200,
		discount_type: "fixed",
		product_status: "available",
		pack_size: "1.5L",
		product_weight: 0.5,
		product_weight_type: "kg",
		product_dec_en: "A high-quality electric kettle for quick boiling.",
		product_dec_bn: "দ্রুত ফুটানোর জন্য একটি উচ্চমানের ইলেকট্রিক কেটল।",
		health_benefits: {
			title_bn: "স্বাস্থ্য উপকারিতা",
			title_en: "Health Benefits",
			description_bn: "স্বাস্থ্যকর পানি প্রস্তুতির জন্য আদর্শ।",
			description_en: "Ideal for preparing healthy water.",
		},
		brand: "HomeMaster",
		vat: 15,
		vendor: "Home Vendor",
		unit: 1,
		unit_type: "piece",
		isComboPack: false,
		isShowing: true,
		purchase_masuring_unit: "piece",
		searchTag: "kettle, kitchen, appliance",
		showingComboId: 0,
		sales_masuring_unit: "piece",
	},
	{
		id: 6,
		mainCategory: {
			id: 2,
			image: "category2.jpg",
			name_en: "Electronics",
			name_bn: "ইলেকট্রনিক্স",
			slug: "electronics",
		},
		product_code: "P006",
		product_slug: "bluetooth-headphones-01",
		product_title_en: "Bluetooth Headphones",
		product_title_bn: "ব্লুটুথ হেডফোন",
		product_image: "bluetooth-headphones-01.jpg",
		product_gallery: [
			"bluetooth-headphones-01.jpg",
			"bluetooth-headphones-02.jpg",
		],
		regular_prices: 2500,
		current_prices: 2200,
		quantity: 120,
		active_status: 1,
		discount_id: 6,
		discount_amount: 300,
		discount_type: "fixed",
		product_status: "available",
		pack_size: "1 unit",
		product_weight: 0.3,
		product_weight_type: "kg",
		product_dec_en: "High-quality Bluetooth headphones for music lovers.",
		product_dec_bn: "সঙ্গীত প্রেমীদের জন্য উচ্চমানের ব্লুটুথ হেডফোন।",
		health_benefits: {
			title_bn: "স্বাস্থ্য উপকারিতা",
			title_en: "Health Benefits",
			description_bn:
				"মস্তিষ্কের কার্যক্ষমতা উন্নত করে এবং শ্রবণক্ষমতা বৃদ্ধি করে।",
			description_en: "Improves brain function and enhances hearing ability.",
		},
		brand: "SoundMax",
		vat: 15,
		vendor: "Sound Vendor",
		unit: 1,
		unit_type: "piece",
		isComboPack: false,
		isShowing: true,
		purchase_masuring_unit: "piece",
		searchTag: "headphones, bluetooth, music",
		showingComboId: 0,
		sales_masuring_unit: "piece",
	},
];

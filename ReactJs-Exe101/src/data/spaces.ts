export interface SpaceFeature {
  icon: string;
  label: string;
  highlight?: boolean;
}

export interface SpaceAmenity {
  icon: string;
  label: string;
}

export interface Space {
  id: string;
  name: string;
  location: string;
  rating: string;
  reviewCount: number;
  isOpen: boolean;
  price: string;
  capacity: string;
  hours: string;
  description: string;
  image: string;
  imageAlt: string;
  galleryImages: { src: string; alt: string }[];
  features: SpaceFeature[];
  amenities: SpaceAmenity[];
  popular?: boolean;
  featured?: boolean;
}

export const spaces: Space[] = [
  {
    id: "the-greenhouse",
    name: "The Greenhouse",
    location: "Da Nang • Garden Space",
    rating: "4.7",
    reviewCount: 84,
    isOpen: true,
    price: "$15",
    capacity: "30 People",
    hours: "07:00 AM - 09:00 PM",
    description:
      "A garden-filled cafe with floor-to-ceiling windows and natural light. The private event room fits up to 30 people and comes with a projector and whiteboard — ideal for workshops, team meetings, and creative brainstorming sessions.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVeUg154bs0ZZpVGPaKbTBrrzbY_ylbj2_wjZ_SrCwr1ybzFkYNCZSzUJ7XoFCa0FS4d_MU-DKhkaL6T5u6YcFr0MR3Hrh6apMdZqA1M5fsSLqbRQr3XUMYhctQEuAkyQS5bcZt0ga3jxbj77sWUqMPmkwgvNBncHq6GbRM-il4sbaw0nogQ8nLLwZb72Vq6-ZxwBAPQPAIge4LUVXrpkXJtki4pYEPBfIvl0kGi4i2QeNqA0VXNfyEVbwBeHeLx-TQyaVflAXIUyE",
    imageAlt: "Greenhouse workspace with plants",
    galleryImages: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA30ru_rkkQ-Hcgw9yGfazi3L43Pe95TPHQzHEO1QHB2dV7E5x3d2SpiYTIXIZQ1Zq9Nx2FHUNz7-YfwnBkfpkRLtb41ragV6CZtAAHocY-fFru52duuwH94N8F-5VN5UsR3sHAOywH7UAJV-am-e4UxbMiSITxRn1Tnuy8-_olFqjqHm30oearaAW6CgwXUPRFAwpjthsHV-UdD_fn6iVZo76TPZJE6iYWSEB4XpLGzyVOzlsUQAGVA27eKcBiqmpukDlqzyxfz3ES",
        alt: "Interior view 1",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLL6g3M3LpqIJiGY8m9Oasp-zfpRESLmv6WwvXfp9cFW-Vzu_HJwJlGqn6Ro3vw6jepzizhgKs_zJ7QDr0m2h6dqi3jw0930Wr5p4kp-FH9Vu4onXgXSPBj-wR2NkHfzQHj7Se2Jk7KPZtjPobPcba_eFwBZDTPCdOg53C81r0pz7JVaekWablEWyJD_nhLRoHvKNW3SSeajDhLXAqajthwmRcPflzEvcbaRGscm6WjJOJhCt0WQgy4S7VbSDSwJYiDykeFV3-f5Rb",
        alt: "Interior view 2",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAakK_M44SIVb87EFzODfHNeOBhyRBvYUQJe3-Ut72DdqPj2jhyF3qc7o-F8RyvwXvv5EBvXNgqU1MmXxr09-sriGMSKncrwVoMkpT_h2NQajpFNBZDhCJb0MSptmvKD-vTPCXTywNdwpKn7X44SmQus1q24i-7Nam3BLKIliUEoHqQnJ2V5sllgC59hqaM60vSkDqUTtCN9keyRZ-Ub_jp2bW02dMRA2cr1PCqRkuzBtbBWVev90SPjqSqI1zNWTMbmtQbYBSd-Xck",
        alt: "Interior view 3",
      },
    ],
    features: [
      { icon: "wifi", label: "500 Mbps" },
      { icon: "coffee", label: "Free Brew" },
    ],
    amenities: [
      { icon: "wifi", label: "Fast Wifi" },
      { icon: "coffee", label: "Free Coffee" },
      { icon: "ac_unit", label: "Air Con" },
    ],
  },
  {
    id: "urban-roastery",
    name: "Urban Roastery",
    location: "Da Nang • Premium Space",
    rating: "4.9",
    reviewCount: 128,
    isOpen: true,
    price: "$15",
    capacity: "45 People",
    hours: "08:00 AM - 10:00 PM",
    description:
      "Located in the heart of Da Nang, Urban Roastery offers a premium private meeting space for up to 45 people. Equipped with a full sound system, projector, and high-speed Wi-Fi — perfectly suited for workshops, training sessions, and corporate group meetings.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA30ru_rkkQ-Hcgw9yGfazi3L43Pe95TPHQzHEO1QHB2dV7E5x3d2SpiYTIXIZQ1Zq9Nx2FHUNz7-YfwnBkfpkRLtb41ragV6CZtAAHocY-fFru52duuwH94N8F-5VN5UsR3sHAOywH7UAJV-am-e4UxbMiSITxRn1Tnuy8-_olFqjqHm30oearaAW6CgwXUPRFAwpjthsHV-UdD_fn6iVZo76TPZJE6iYWSEB4XpLGzyVOzlsUQAGVA27eKcBiqmpukDlqzyxfz3ES",
    imageAlt: "Urban Roastery workspace",
    galleryImages: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVeUg154bs0ZZpVGPaKbTBrrzbY_ylbj2_wjZ_SrCwr1ybzFkYNCZSzUJ7XoFCa0FS4d_MU-DKhkaL6T5u6YcFr0MR3Hrh6apMdZqA1M5fsSLqbRQr3XUMYhctQEuAkyQS5bcZt0ga3jxbj77sWUqMPmkwgvNBncHq6GbRM-il4sbaw0nogQ8nLLwZb72Vq6-ZxwBAPQPAIge4LUVXrpkXJtki4pYEPBfIvl0kGi4i2QeNqA0VXNfyEVbwBeHeLx-TQyaVflAXIUyE",
        alt: "Cafe detail 1",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLL6g3M3LpqIJiGY8m9Oasp-zfpRESLmv6WwvXfp9cFW-Vzu_HJwJlGqn6Ro3vw6jepzizhgKs_zJ7QDr0m2h6dqi3jw0930Wr5p4kp-FH9Vu4onXgXSPBj-wR2NkHfzQHj7Se2Jk7KPZtjPobPcba_eFwBZDTPCdOg53C81r0pz7JVaekWablEWyJD_nhLRoHvKNW3SSeajDhLXAqajthwmRcPflzEvcbaRGscm6WjJOJhCt0WQgy4S7VbSDSwJYiDykeFV3-f5Rb",
        alt: "Cafe detail 2",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAakK_M44SIVb87EFzODfHNeOBhyRBvYUQJe3-Ut72DdqPj2jhyF3qc7o-F8RyvwXvv5EBvXNgqU1MmXxr09-sriGMSKncrwVoMkpT_h2NQajpFNBZDhCJb0MSptmvKD-vTPCXTywNdwpKn7X44SmQus1q24i-7Nam3BLKIliUEoHqQnJ2V5sllgC59hqaM60vSkDqUTtCN9keyRZ-Ub_jp2bW02dMRA2cr1PCqRkuzBtbBWVev90SPjqSqI1zNWTMbmtQbYBSd-Xck",
        alt: "Cafe detail 3",
      },
    ],
    features: [
      { icon: "bolt", label: "Fast Wifi", highlight: true },
      { icon: "power", label: "Power Outlets" },
    ],
    amenities: [
      { icon: "bolt", label: "Fast Wifi" },
      { icon: "power", label: "Outlets" },
      { icon: "videocam", label: "Projector" },
    ],
    popular: true,
    featured: true,
  },
  {
    id: "minimalist-pod",
    name: "Minimalist Pod",
    location: "Da Nang • Focus Zone",
    rating: "4.8",
    reviewCount: 63,
    isOpen: true,
    price: "$20",
    capacity: "20 People",
    hours: "07:00 AM - 11:00 PM",
    description:
      "A sleek, soundproofed venue designed for focused group sessions. Clean acoustics, a built-in projector, and ergonomic group seating make it ideal for private training, interviews, and small team workshops up to 20 people.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLL6g3M3LpqIJiGY8m9Oasp-zfpRESLmv6WwvXfp9cFW-Vzu_HJwJlGqn6Ro3vw6jepzizhgKs_zJ7QDr0m2h6dqi3jw0930Wr5p4kp-FH9Vu4onXgXSPBj-wR2NkHfzQHj7Se2Jk7KPZtjPobPcba_eFwBZDTPCdOg53C81r0pz7JVaekWablEWyJD_nhLRoHvKNW3SSeajDhLXAqajthwmRcPflzEvcbaRGscm6WjJOJhCt0WQgy4S7VbSDSwJYiDykeFV3-f5Rb",
    imageAlt: "Minimalist wooden pod workspace",
    galleryImages: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVeUg154bs0ZZpVGPaKbTBrrzbY_ylbj2_wjZ_SrCwr1ybzFkYNCZSzUJ7XoFCa0FS4d_MU-DKhkaL6T5u6YcFr0MR3Hrh6apMdZqA1M5fsSLqbRQr3XUMYhctQEuAkyQS5bcZt0ga3jxbj77sWUqMPmkwgvNBncHq6GbRM-il4sbaw0nogQ8nLLwZb72Vq6-ZxwBAPQPAIge4LUVXrpkXJtki4pYEPBfIvl0kGi4i2QeNqA0VXNfyEVbwBeHeLx-TQyaVflAXIUyE",
        alt: "Interior view 1",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA30ru_rkkQ-Hcgw9yGfazi3L43Pe95TPHQzHEO1QHB2dV7E5x3d2SpiYTIXIZQ1Zq9Nx2FHUNz7-YfwnBkfpkRLtb41ragV6CZtAAHocY-fFru52duuwH94N8F-5VN5UsR3sHAOywH7UAJV-am-e4UxbMiSITxRn1Tnuy8-_olFqjqHm30oearaAW6CgwXUPRFAwpjthsHV-UdD_fn6iVZo76TPZJE6iYWSEB4XpLGzyVOzlsUQAGVA27eKcBiqmpukDlqzyxfz3ES",
        alt: "Interior view 2",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAakK_M44SIVb87EFzODfHNeOBhyRBvYUQJe3-Ut72DdqPj2jhyF3qc7o-F8RyvwXvv5EBvXNgqU1MmXxr09-sriGMSKncrwVoMkpT_h2NQajpFNBZDhCJb0MSptmvKD-vTPCXTywNdwpKn7X44SmQus1q24i-7Nam3BLKIliUEoHqQnJ2V5sllgC59hqaM60vSkDqUTtCN9keyRZ-Ub_jp2bW02dMRA2cr1PCqRkuzBtbBWVev90SPjqSqI1zNWTMbmtQbYBSd-Xck",
        alt: "Interior view 3",
      },
    ],
    features: [
      { icon: "volume_off", label: "Silent Zone" },
      { icon: "chair", label: "Ergonomic" },
    ],
    amenities: [
      { icon: "volume_off", label: "Silent Zone" },
      { icon: "chair", label: "Ergonomic" },
      { icon: "wifi", label: "Fast Wifi" },
    ],
  },
  {
    id: "library-nook",
    name: "Library Nook",
    location: "Da Nang • Quiet Corner",
    rating: "4.6",
    reviewCount: 47,
    isOpen: false,
    price: "$12",
    capacity: "15 People",
    hours: "09:00 AM - 09:00 PM",
    description:
      "Tucked away in a quiet corner, Library Nook offers an intimate venue for small-group training and structured workshops. Warm lighting, low noise, and a whiteboard make it ideal for groups of up to 15 needing deep focus.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAakK_M44SIVb87EFzODfHNeOBhyRBvYUQJe3-Ut72DdqPj2jhyF3qc7o-F8RyvwXvv5EBvXNgqU1MmXxr09-sriGMSKncrwVoMkpT_h2NQajpFNBZDhCJb0MSptmvKD-vTPCXTywNdwpKn7X44SmQus1q24i-7Nam3BLKIliUEoHqQnJ2V5sllgC59hqaM60vSkDqUTtCN9keyRZ-Ub_jp2bW02dMRA2cr1PCqRkuzBtbBWVev90SPjqSqI1zNWTMbmtQbYBSd-Xck",
    imageAlt: "Quiet library corner",
    galleryImages: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVeUg154bs0ZZpVGPaKbTBrrzbY_ylbj2_wjZ_SrCwr1ybzFkYNCZSzUJ7XoFCa0FS4d_MU-DKhkaL6T5u6YcFr0MR3Hrh6apMdZqA1M5fsSLqbRQr3XUMYhctQEuAkyQS5bcZt0ga3jxbj77sWUqMPmkwgvNBncHq6GbRM-il4sbaw0nogQ8nLLwZb72Vq6-ZxwBAPQPAIge4LUVXrpkXJtki4pYEPBfIvl0kGi4i2QeNqA0VXNfyEVbwBeHeLx-TQyaVflAXIUyE",
        alt: "Interior view 1",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA30ru_rkkQ-Hcgw9yGfazi3L43Pe95TPHQzHEO1QHB2dV7E5x3d2SpiYTIXIZQ1Zq9Nx2FHUNz7-YfwnBkfpkRLtb41ragV6CZtAAHocY-fFru52duuwH94N8F-5VN5UsR3sHAOywH7UAJV-am-e4UxbMiSITxRn1Tnuy8-_olFqjqHm30oearaAW6CgwXUPRFAwpjthsHV-UdD_fn6iVZo76TPZJE6iYWSEB4XpLGzyVOzlsUQAGVA27eKcBiqmpukDlqzyxfz3ES",
        alt: "Interior view 2",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLL6g3M3LpqIJiGY8m9Oasp-zfpRESLmv6WwvXfp9cFW-Vzu_HJwJlGqn6Ro3vw6jepzizhgKs_zJ7QDr0m2h6dqi3jw0930Wr5p4kp-FH9Vu4onXgXSPBj-wR2NkHfzQHj7Se2Jk7KPZtjPobPcba_eFwBZDTPCdOg53C81r0pz7JVaekWablEWyJD_nhLRoHvKNW3SSeajDhLXAqajthwmRcPflzEvcbaRGscm6WjJOJhCt0WQgy4S7VbSDSwJYiDykeFV3-f5Rb",
        alt: "Interior view 3",
      },
    ],
    features: [
      { icon: "book", label: "Reference" },
      { icon: "lightbulb", label: "Good Light" },
    ],
    amenities: [
      { icon: "book", label: "Reference" },
      { icon: "lightbulb", label: "Good Light" },
      { icon: "wifi", label: "Wifi" },
    ],
  },
  {
    id: "the-hideout-cafe",
    name: "The Hideout Cafe",
    location: "My Khe Beach, Da Nang",
    rating: "4.9",
    reviewCount: 156,
    isOpen: true,
    price: "$4",
    capacity: "35 People",
    hours: "06:30 AM - 11:00 PM",
    description:
      "A beachside cafe steps from My Khe Beach with a private semi-open meeting area for up to 35 people. Fast Wi-Fi, a portable projector, and power outlets at every seat — perfect for relaxed workshops and offsite team sessions.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-9VBH3gDBYQQ2lge0mN0G-DihmCj7mS56ZZ62JcbmeeeuyfTmCEj1QALli9rexYKNce-DrM2RkTzdxWgtUu3xFUb016ednmJ7DlUpthfndWNjUSiSxMTBbAV7XUrNkpni7t4RA2NCAu87-PzHcqQDL0WpanMnzeckswYMETT-0f5MdU4medqDdj9KnOm4j94O5WTebIbC0wocj5nYV8TKciW1pe_-CKBaxlR1kasfLQb3aJ6HRq2Z6cgocKIeckHf5K8Vs_bO9aIB",
    imageAlt: "Modern cafe interior with warm lighting",
    galleryImages: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqS_UKjypZJpjCH_cAN87Qa4oT1_W74A6hdRUzFWw_8Vl4dhFtf2NzKFpJDqRaBoutKYMrc38uB2ZPdI7N-etw7fk83Err-W791crkpmTqvaI7gwG70S02Lm6eU7h5A0qsAzqNQV_2UBH20NgqEikVwvsoWA4Aq-MehY54ca-GSLIAdRkUD1esHTUX0egg2bd6glxf19ZMgGLqJDVh8Kq-fP5ocLcL1WwAEEYkNTZDrNkPDTFB0cy9UlpE39YE7GFRnjeERl9-n5AM",
        alt: "Interior view 1",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3MAqlSop1NELijS7QSBdRfA_OdTvNpi_D44qxaDB4B1jhuIsutuSWTkjSMaQekRgUAPTr7VQzS2e1_K0oL70fIE8P__4_QlUH6SzhpIjkVOWvDVbNCpFq2KDtkNs4RuPbnZC01afoS4WhFZjIjH4U1Uxr_c_FckkJ1cqnOuC6dCnavTCwkUIx7CQ8fujNQmlu8aq9HC4-y78u4_539ZMrP8twFWZvzEJTKJEqXbHife_DAHkJV613-CRgsF6D1ClY3Qr5K-1x-bC_",
        alt: "Interior view 2",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFApxIlyaD0n4yNqeF1rdzN-ttmCG5tPAS2pPz040gqq-Pl_AnKc0adfv_pkd2K4ozHUZxSx7h4LZY4HYWHuhWwX4f0oeAuawyp4rHoaY9o_VlR78ktE6jKVN-D0Q6Hq9m3QF5Ch4RBib7H5SRy5BP-E8o9W-21ChnpO1vRcnGzXIsf1JCIwcodFafWeNDX9mc1U8jGrZLCmrCkCg89EPo8CWD_OUNEPIrUgG7CwyqK-gl0s7Vy_ocG6VoW09suh5tMAYRjEsMf74p",
        alt: "Interior view 3",
      },
    ],
    features: [
      { icon: "wifi", label: "Fast Wifi", highlight: true },
      { icon: "power", label: "Plugs" },
    ],
    amenities: [
      { icon: "wifi", label: "Fast Wifi" },
      { icon: "power", label: "Plugs" },
      { icon: "coffee", label: "Coffee" },
    ],
    popular: true,
  },
  {
    id: "nomad-space",
    name: "Nomad Space",
    location: "Hai Chau District, Da Nang",
    rating: "4.7",
    reviewCount: 93,
    isOpen: true,
    price: "$6",
    capacity: "50 People",
    hours: "07:00 AM - 10:00 PM",
    description:
      "Designed for groups and remote teams, Nomad Space offers two dedicated meeting rooms, a projector, sound system, and specialty coffee. With capacity for up to 50 people, it's a go-to venue for team training and community workshops.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqS_UKjypZJpjCH_cAN87Qa4oT1_W74A6hdRUzFWw_8Vl4dhFtf2NzKFpJDqRaBoutKYMrc38uB2ZPdI7N-etw7fk83Err-W791crkpmTqvaI7gwG70S02Lm6eU7h5A0qsAzqNQV_2UBH20NgqEikVwvsoWA4Aq-MehY54ca-GSLIAdRkUD1esHTUX0egg2bd6glxf19ZMgGLqJDVh8Kq-fP5ocLcL1WwAEEYkNTZDrNkPDTFB0cy9UlpE39YE7GFRnjeERl9-n5AM",
    imageAlt: "Bright workspace with large windows",
    galleryImages: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-9VBH3gDBYQQ2lge0mN0G-DihmCj7mS56ZZ62JcbmeeeuyfTmCEj1QALli9rexYKNce-DrM2RkTzdxWgtUu3xFUb016ednmJ7DlUpthfndWNjUSiSxMTBbAV7XUrNkpni7t4RA2NCAu87-PzHcqQDL0WpanMnzeckswYMETT-0f5MdU4medqDdj9KnOm4j94O5WTebIbC0wocj5nYV8TKciW1pe_-CKBaxlR1kasfLQb3aJ6HRq2Z6cgocKIeckHf5K8Vs_bO9aIB",
        alt: "Interior view 1",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3MAqlSop1NELijS7QSBdRfA_OdTvNpi_D44qxaDB4B1jhuIsutuSWTkjSMaQekRgUAPTr7VQzS2e1_K0oL70fIE8P__4_QlUH6SzhpIjkVOWvDVbNCpFq2KDtkNs4RuPbnZC01afoS4WhFZjIjH4U1Uxr_c_FckkJ1cqnOuC6dCnavTCwkUIx7CQ8fujNQmlu8aq9HC4-y78u4_539ZMrP8twFWZvzEJTKJEqXbHife_DAHkJV613-CRgsF6D1ClY3Qr5K-1x-bC_",
        alt: "Interior view 2",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFApxIlyaD0n4yNqeF1rdzN-ttmCG5tPAS2pPz040gqq-Pl_AnKc0adfv_pkd2K4ozHUZxSx7h4LZY4HYWHuhWwX4f0oeAuawyp4rHoaY9o_VlR78ktE6jKVN-D0Q6Hq9m3QF5Ch4RBib7H5SRy5BP-E8o9W-21ChnpO1vRcnGzXIsf1JCIwcodFafWeNDX9mc1U8jGrZLCmrCkCg89EPo8CWD_OUNEPIrUgG7CwyqK-gl0s7Vy_ocG6VoW09suh5tMAYRjEsMf74p",
        alt: "Interior view 3",
      },
    ],
    features: [
      { icon: "meeting_room", label: "Meeting Room" },
      { icon: "local_cafe", label: "Specialty Coffee" },
    ],
    amenities: [
      { icon: "meeting_room", label: "Meeting Room" },
      { icon: "local_cafe", label: "Coffee" },
      { icon: "wifi", label: "Fast Wifi" },
    ],
    featured: true,
  },
  {
    id: "zenith-hub",
    name: "Zenith Hub",
    location: "Cam Le District, Da Nang",
    rating: "4.5",
    reviewCount: 71,
    isOpen: true,
    price: "$3",
    capacity: "40 People",
    hours: "08:00 AM - 09:00 PM",
    description:
      "Zenith Hub offers an affordable garden-view meeting space with open-air and indoor seating for up to 40 people. Calm ambiance, a whiteboard, and basic AV setup make it a budget-friendly choice for workshops and study groups.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3MAqlSop1NELijS7QSBdRfA_OdTvNpi_D44qxaDB4B1jhuIsutuSWTkjSMaQekRgUAPTr7VQzS2e1_K0oL70fIE8P__4_QlUH6SzhpIjkVOWvDVbNCpFq2KDtkNs4RuPbnZC01afoS4WhFZjIjH4U1Uxr_c_FckkJ1cqnOuC6dCnavTCwkUIx7CQ8fujNQmlu8aq9HC4-y78u4_539ZMrP8twFWZvzEJTKJEqXbHife_DAHkJV613-CRgsF6D1ClY3Qr5K-1x-bC_",
    imageAlt: "Minimalist office space with garden view",
    galleryImages: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-9VBH3gDBYQQ2lge0mN0G-DihmCj7mS56ZZ62JcbmeeeuyfTmCEj1QALli9rexYKNce-DrM2RkTzdxWgtUu3xFUb016ednmJ7DlUpthfndWNjUSiSxMTBbAV7XUrNkpni7t4RA2NCAu87-PzHcqQDL0WpanMnzeckswYMETT-0f5MdU4medqDdj9KnOm4j94O5WTebIbC0wocj5nYV8TKciW1pe_-CKBaxlR1kasfLQb3aJ6HRq2Z6cgocKIeckHf5K8Vs_bO9aIB",
        alt: "Interior view 1",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqS_UKjypZJpjCH_cAN87Qa4oT1_W74A6hdRUzFWw_8Vl4dhFtf2NzKFpJDqRaBoutKYMrc38uB2ZPdI7N-etw7fk83Err-W791crkpmTqvaI7gwG70S02Lm6eU7h5A0qsAzqNQV_2UBH20NgqEikVwvsoWA4Aq-MehY54ca-GSLIAdRkUD1esHTUX0egg2bd6glxf19ZMgGLqJDVh8Kq-fP5ocLcL1WwAEEYkNTZDrNkPDTFB0cy9UlpE39YE7GFRnjeERl9-n5AM",
        alt: "Interior view 2",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFApxIlyaD0n4yNqeF1rdzN-ttmCG5tPAS2pPz040gqq-Pl_AnKc0adfv_pkd2K4ozHUZxSx7h4LZY4HYWHuhWwX4f0oeAuawyp4rHoaY9o_VlR78ktE6jKVN-D0Q6Hq9m3QF5Ch4RBib7H5SRy5BP-E8o9W-21ChnpO1vRcnGzXIsf1JCIwcodFafWeNDX9mc1U8jGrZLCmrCkCg89EPo8CWD_OUNEPIrUgG7CwyqK-gl0s7Vy_ocG6VoW09suh5tMAYRjEsMf74p",
        alt: "Interior view 3",
      },
    ],
    features: [
      { icon: "park", label: "Garden View" },
      { icon: "nature", label: "Open Air" },
    ],
    amenities: [
      { icon: "park", label: "Garden View" },
      { icon: "wifi", label: "Wifi" },
      { icon: "coffee", label: "Coffee" },
    ],
  },
];

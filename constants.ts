import { DaySchedule, EditData } from './types';

// Initial data from the provided JSON file
export const INITIAL_DATA: EditData = {
  "d1-t1": "16:22", "d1-t2": "17:00", "d1-t3": "17:30", "d1-t4": "18:00", "d1-t5": "19:00",
  "d2-t1": "09:00", "d2-t2": "10:30", "d2-t3": "13:00", "d2-t4": "15:30",
  "d3-t1": "09:30", "d3-t2": "10:45", "d3-t3": "14:00", "d3-t4": "17:00",
  "d4-t1": "10:00", "d4-t2": "12:30", "d4-t3": "14:30",
  "d5-t1": "11:00", "d5-t2": "12:30", "d5-t3": "14:30", "d5-t4": "17:30",
  "d6-t1": "上午",   "d6-t2": "14:30", "d6-t3": "17:00"
};

export const ITINERARY_CONFIG: DaySchedule[] = [
  {
    day: 1,
    date: "2/23 (一)",
    title: "抵達仙台",
    weather: "晴時多雲 2°C~6°C",
    weatherIcon: "🌤️",
    events: [
      {
        id: "e1-1",
        timeKey: "d1-t1",
        noteKey: "d1-n1",
        title: "抵達仙台機場",
        description: "🎉 東北之旅，集合出發！",
        locationLink: "https://www.google.com/maps/search/?api=1&query=仙台空港",
        imageSrc: "day1-1.png" 
      },
      {
        id: "e1-2",
        timeKey: "d1-t2",
        noteKey: "d1-n2",
        title: "前往市區",
        badges: [{ text: "🚄 搭乘機場聯絡線 (約25分)", type: "info" }],
        details: { title: "住宿", items: ["Hotel GrandBach Sendai"] }
      },
      {
        id: "e1-3",
        timeKey: "d1-t5",
        noteKey: "d1-n3",
        title: "晚餐：牛舌 善治郎",
        highlight: true,
        locationLink: "https://www.google.com/maps/search/?api=1&query=たんや善治郎+仙台駅前本店",
        details: { 
          title: "仙台必吃：炭燒牛舌", 
          items: ["特色：經典厚切牛舌定食，配麥飯與牛尾湯。", "長輩建議：可點「燉煮牛舌 (Yude-tan)」，口感軟嫩。"] 
        },
        imageSrc: "day1-2.png"
      }
    ]
  },
  {
    day: 2,
    date: "2/24 (二)",
    title: "樹冰 & 銀山",
    weather: "大雪寒冷 -8°C~-2°C",
    weatherIcon: "🌨️",
    events: [
      {
        id: "e2-1",
        timeKey: "d2-t1",
        noteKey: "d2-n1",
        title: "包車司機接駁",
      },
      {
        id: "e2-2",
        timeKey: "d2-t2",
        noteKey: "d2-n2",
        title: "藏王樹冰 (雪怪車)",
        highlight: true,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Sumikawa+Snow+Park",
        details: {
          title: "WILD MONSTER 雪怪車",
          items: ["特色：搭乘暖氣履帶車，近距離看樹冰。", "穿著：山上極冷，務必戴好毛帽、手套、圍巾。"]
        },
        imageSrc: "day2-1.png"
      },
      {
        id: "e2-3",
        timeKey: "d2-t4",
        noteKey: "d2-n3",
        title: "抵達銀山溫泉",
        locationLink: "https://www.google.com/maps/search/?api=1&query=銀山溫泉",
        details: {
          title: "大正浪漫 銀山溫泉",
          items: ["美景：傍晚藍調時刻(Blue Hour)點燈最美。", "安全：地面結冰非常滑！務必穿防滑鞋套。", "住宿：銀山溫泉"]
        },
        imageSrc: "day2-2.png"
      }
    ]
  },
  {
    day: 3,
    date: "2/25 (三)",
    title: "最上川遊船",
    weather: "小雪/陰 -1°C~3°C",
    weatherIcon: "❄️",
    events: [
      {
        id: "e3-1",
        timeKey: "d3-t1",
        noteKey: "d3-n1",
        title: "出發",
      },
      {
        id: "e3-2",
        timeKey: "d3-t2",
        noteKey: "d3-n2",
        title: "最上川 芭蕉遊船",
        highlight: true,
        details: {
          title: "冬季暖桌遊船",
          items: ["舒適：船內有暖被桌，雙腳溫暖地欣賞雪見峽谷。"]
        },
        imageSrc: "day3-1.png"
      },
      {
        id: "e3-3",
        timeKey: "d3-t3",
        noteKey: "d3-n3",
        title: "酒田 山居倉庫",
        locationLink: "https://www.google.com/maps/search/?api=1&query=酒田+山居倉庫",
        details: {
            title: "山居倉庫 (夢之俱樂)",
            items: ["特色：百年米倉建築群，非常好買在地伴手禮。", "住宿：湯野濱溫泉"]
        },
        imageSrc: "day3-2.png"
      }
    ]
  },
  {
    day: 4,
    date: "2/26 (四)",
    title: "水母館 & 萬國屋",
    weather: "陰偶雪 1°C~5°C",
    weatherIcon: "☁️",
    events: [
      {
        id: "e4-1",
        timeKey: "d4-t1",
        noteKey: "d4-n1",
        title: "加茂水族館",
        highlight: true,
        locationLink: "https://www.google.com/maps/search/?api=1&query=加茂水族館",
        details: {
          title: "水母夢幻劇場",
          items: ["療癒：直徑5公尺的巨大水母槽，世界第一。"]
        },
        imageSrc: "day4-1.png"
      },
      {
        id: "e4-2",
        timeKey: "d4-t3",
        noteKey: "d4-n2",
        title: "入住萬國屋",
        details: {
            title: "溫海溫泉 萬國屋",
            items: ["享受：日本百選溫泉，盡情享受風呂與懷石料理。"]
        },
        imageSrc: "day4-2.png"
      }
    ]
  },
  {
    day: 5,
    date: "2/27 (五)",
    title: "採草莓 & 神社",
    weather: "晴時多雲 0°C~5°C",
    weatherIcon: "🌤️",
    events: [
      {
        id: "e5-1",
        timeKey: "d5-t1",
        noteKey: "d5-n1",
        title: "採草莓體驗",
        highlight: true,
        details: {
          title: "溫室高架草莓",
          items: ["貼心：高架種植，不用彎腰蹲下，對長輩膝蓋友善。"]
        },
        imageSrc: "day5-1.png"
      },
      {
        id: "e5-2",
        timeKey: "d5-t3",
        noteKey: "d5-n2",
        title: "大崎八幡宮",
        highlight: true,
        locationLink: "https://www.google.com/maps/search/?api=1&query=大崎八幡宮",
        details: {
          title: "國寶 大崎八幡宮",
          items: ["省力：請司機開到「北側停車場」或側面入口，完全避開爬樓梯。", "住宿：仙台市區"]
        },
        imageSrc: "day5-2.png"
      }
    ]
  },
  {
    day: 6,
    date: "2/28 (六)",
    title: "返台",
    weather: "晴朗 3°C~7°C",
    weatherIcon: "☀️",
    events: [
      {
        id: "e6-1",
        timeKey: "d6-t1",
        noteKey: "d6-n1",
        title: "仙台朝市 / S-PAL",
        details: {
          title: "最後採買時光",
          items: ["朝市：感受在地活力，買當季水果。", "S-PAL：車站共構，伴手禮一次買齊。"]
        },
        imageSrc: "day6-1.png"
      },
      {
        id: "e6-2",
        timeKey: "d6-t3",
        noteKey: "d6-n2",
        title: "搭機返台",
        description: "✈️ 航班：甜蜜的家",
        imageSrc: "day6-2.png"
      }
    ]
  }
];
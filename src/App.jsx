import React, { useState } from 'react';
import { 
  Plane, Car, ShoppingBag, MapPin, Utensils, 
  Camera, Calendar, CheckSquare, Info, Ship, 
  Clock, Sun, Coffee, ShoppingCart, Gem,
  Square, CheckSquare as CheckSquareIcon,
  ChevronRight, ArrowLeft, Heart, Bookmark,
  StickyNote, Star, Sparkles, Anchor, ParkingCircle,
  Smartphone, Timer, Landmark, Bus, Wand2,
  Music, Camera as CameraIcon, Gift, BookOpen, ScrollText
} from 'lucide-react';

const App = () => {
  const [view, setView] = useState('cover'); // 'cover' or 'guide'
  const [activeTab, setActiveTab] = useState('checklist');
  
  // 行前準備清單
  const [checkedItems, setCheckedItems] = useState({
    '重要證件：護照 & 72hrs前填電子入境卡': false,
    '駕照正本：國際駕照 & 台灣汽車、機車駕照': false,
    '旅費保障：台幣 10000 & 旅遊險': false,
    '預約確認：Klook 買票 & Catch table 訂位': false,
    '離線檔案：下載 Airbnb、機票、租車檔案': false,
    '網路支付：Wowpass (下載/儲值/綁定) & Sim卡*2': false,
    '3C 配件：行充*2、插頭*2、轉接頭*2、原廠線*2 & 各種線': false,
    '行李保安：絕緣膠帶、行李束帶、行李扣環': false,
    '盥洗免洗：可淘汰的內衣褲、襪子、牙刷': false
  });

  // 行程中任務狀態
  const [tripTasks, setTripTasks] = useState({
    'rental_confirm': false,
    'udo_wowpass': false,
    'udo_forms': false,
    'udo_passport_check': false,
    'udo_return_ticket': false,
    'sisters_reservation': false
  });

  const toggleItem = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const toggleTripTask = (taskId) => {
    setTripTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const days = [
    {
      id: 'day1',
      title: 'DAY 1 (03/23) Mon.',
      subtitle: '濟州島，我們來了！',
      icon: '✈️',
      dailyNote: '✈️ 今天移動比較久，穿寬鬆舒適最重要！記得去遊客中心領5000韓元券，吃完炸雞早點睡，❗️隔天要早起❗️',
      schedule: [
        { time: '17:25', activity: '降落 ✈️ 濟州機場', detail: '辦理入境手續。💡務必至遊客中心領取韓幣 5000 元券！' },
        { 
          time: '18:30', 
          activity: '天使租車 🚗', 
          isTask: true,
          taskId: 'rental_confirm',
          taskText: '確認承租時間 3/23 18:30 - 3/29 08:00',
          detail: '一樓5號出口，走路5分鐘至「5區14號」領車。' 
        },
        { time: '19:30', activity: 'Check-in Sodam Pension', detail: '🏠 放置行李，稍作休息。' },
        { 
          time: '20:30', 
          activity: '偶來市場巡禮 🛍️', 
          hasExtraNote: 'olle_market',
          detail: '老奶奶的年糕 (橘子麻糬，注意只營業到 21:00！)' 
        },
        { time: '21:30', activity: '天地淵Ho炸雞 🍴', detail: '17:00-23:00 (週二公休)。吃飽喝足趕快休息，明天要早起！' }
      ]
    },
    {
      id: 'day2',
      title: 'DAY 2 (03/24) Tue.',
      subtitle: '絕景跳島與海洋血拼日',
      icon: '⛰️',
      dailyNote: '♦️ 重要提醒：帶護照正本、臺駕照、國際駕照！今天會一直曬太陽，請記得補充水分唷 💦',
      schedule: [
        { 
          time: '08:00', 
          activity: '城山日出峰 ⛰️', 
          hasExtraNote: 'ilchulbong_route',
          detail: '沿途可以拍到超美的油菜花 🌼 與火山口海景！' 
        },
        { 
          time: '10:30', 
          activity: '城山港碼頭 🚢', 
          detail: '抵碼頭，準備買票搭船前往牛島。' 
        },
        { 
          time: '11:00', 
          activity: '牛島乘船任務 (點擊劃掉)', 
          isTaskList: true,
          hasExtraNote: 'udo_terminal',
          tasks: [
            { id: 'udo_wowpass', text: '🎟️ 使用 Wowpass 自動售票機' },
            { id: 'udo_forms', text: '📃 填寫登船申請書 (去回都要繳)' },
            { id: 'udo_passport_check', text: '🛂 出示護照正本買票' },
            { id: 'udo_return_ticket', text: '🎫 買好票，回程船票已收好' }
          ]
        },
        { 
          time: '11:30', 
          activity: '牛島慢活時光 (預計四小時) 🚌', 
          hasExtraNote: 'udo_strategy',
          detail: '必吃清單：烤魷魚、Udo sand花生冰淇淋、炸醬麵、鮑魚、Udoro93炸蝦烏龍麵 🤤' 
        },
        { 
          time: '15:30', 
          activity: '水上星球 Aqua Planet 🎟️', 
          hasExtraNote: 'aqua_planet',
          detail: '🎟️ 網路買門票 NT$732 / 營業時間 09:30-17:00 / 預計停留三小時。' 
        },
        { 
          time: '18:30', 
          activity: '三姓穴海鮮鍋 🍴', 
          detail: '營業時間：10:00-21:00。補充滿滿的鮮甜海味！' 
        },
        { 
          time: '20:00', 
          activity: '逛街血拼去 🛍️', 
          hasExtraNote: 'shopping_day2',
          detail: '七星街買北鼻衣服、大創採購、尋找 Gentle Monster 墨鏡！' 
        }
      ]
    },
    {
      id: 'day3',
      title: 'DAY 3 (03/25) Wed.',
      subtitle: '櫻花海景與紀念寫真',
      icon: '🌸',
      dailyNote: '♦️ 重要提醒：今天下午要去攝影棚，記得穿得漂漂亮亮！一早出發拍櫻花，充滿仙氣的一天開始囉 ✨',
      schedule: [
        { 
          time: '07:30', 
          activity: '典農路賞櫻 🌸', 
          detail: '趕在 08:00 前抵達，捕捉沒有人的絕美櫻花空景！' 
        },
        { 
          time: '08:30', 
          activity: '紅豆蒸包 🥯', 
          detail: '營業時間：08:00-14:00。吃飽飽才有體力跑行程。' 
        },
        { 
          time: '10:00', 
          activity: 'Mazeland 迷宮 🧩', 
          detail: '🎟️ 網路買門票 NT$327 / 營業時間 09:00-18:00 / 預計停留兩小時。' 
        },
        { 
          time: '12:30', 
          activity: '海女博物館 🤿', 
          detail: '🎟️ 網路買門票 / 營業時間 09:00-18:00 / 預計停留一小時。' 
        },
        { 
          time: '14:30', 
          activity: 'Tempus Cafe ☕️', 
          detail: '月汀里無敵海景，必喝招牌橘子咖啡放鬆一下！' 
        },
        { 
          time: '16:00', 
          activity: 'Audrant Bakery 오드랑베이커리 🥖', 
          detail: '07:00-22:00。絕對不能錯過的招牌「大蒜麵包」！' 
        },
        { 
          time: '18:00', 
          activity: '私藏照相館 📷', 
          hasExtraNote: 'photo_studio',
          detail: '18:00 開始。沒有地標 (位於百愫亭附近)，準備拍下專屬的濟州回憶。' 
        },
        { 
          time: '19:00', 
          activity: 'Mandarin Island 🎁', 
          detail: '14:00-21:00 (週四公休)。精緻伴手禮採買時間。' 
        },
        { 
          time: '20:00', 
          activity: 'Donsadon 豚似豚 돈사돈 🍴', 
          hasExtraNote: 'donsadon_south',
          detail: '📍南部分店。12:00-21:30 (📅 網路預約 / 週二公休)。' 
        }
      ]
    },
    {
      id: 'day4',
      title: 'DAY 4 (03/26) Thu.',
      subtitle: '極速飆風與絕美日落',
      icon: '🏎️',
      dailyNote: '♦️ 重要提醒：今晚要準備整理行李囉！白天去玩刺激的賽車，傍晚選個好位子吃鹽麵包看夕陽 🌅',
      schedule: [
        { 
          time: '11:00', 
          activity: 'Hallasan Bakery 한라산과자점 🎁', 
          hasExtraNote: 'hallasan_bakery',
          detail: '11:00-17:00 (週二三公休)。買超可愛的漢拿山餅乾！' 
        },
        { 
          time: '12:00', 
          activity: '大浦海岸 柱狀節理帶 📷', 
          hasExtraNote: 'jusangjeolli',
          detail: '大自然的鬼斧神工，拍美照看海絕佳景點！' 
        },
        { 
          time: '13:30', 
          activity: '9.81 公園 🏎️', 
          hasExtraNote: 'park_981',
          detail: '極速重力賽車體驗！預計停留兩小時。' 
        },
        { 
          time: '17:00', 
          activity: 'Jaemi Jeju 🍴', 
          hasExtraNote: 'jaemi_jeju',
          detail: '超人氣義大利麵！記得注意營業與午休時間。' 
        },
        { 
          time: '18:30', 
          activity: 'Haejigae Cafe ☕️', 
          hasExtraNote: 'haejigae_cafe',
          detail: '09:00-21:00。看日落的聖地，放慢腳步享受吧！' 
        },
        { 
          time: '20:30', 
          activity: '偶來市場 🛍️', 
          detail: '最後的掃街！可以再逛一次把想吃的、想買的補齊。' 
        }
      ]
    },
    {
      id: 'day5',
      title: 'DAY 5 (03/27) Fri.',
      subtitle: '地質奇觀與文化根脈',
      icon: '🏛️',
      dailyNote: '🧳 退房 Sodam 後開啟知性之旅。💕 今日行程涵蓋了濟州的地質學與建國神話，讓我們在風景中讀懂這座島嶼的歷史。',
      schedule: [
        { 
          time: '10:30', 
          activity: '退房 Sodam Pension 🧳', 
          detail: '檢查行李，準備往市區移動。' 
        },
        { 
          time: '11:30', 
          activity: '山房山 油菜花海 🌼', 
          hasExtraNote: 'sanbangsan_edu',
          detail: '🎟️ 現金門票 2,000 ₩。世界地質公園，春季必拍的壯觀背景。' 
        },
        { 
          time: '13:30', 
          activity: '姊妹麵條 자매국수 🍴', 
          isTask: true,
          taskId: 'sisters_reservation',
          taskText: '08:20 網路預約成功',
          hasExtraNote: 'sisters_noodle',
          detail: '濟州必嚐傳統飲食：豬肉湯麵文化。' 
        },
        { 
          time: '15:00', 
          activity: '三姓穴 삼성혈 🌸', 
          hasExtraNote: 'samseonghyeol_edu',
          detail: '指定文化財第134號，探究耽羅王國的發祥史。' 
        },
        { 
          time: '16:30', 
          activity: '濟州牧 官衙 🏯', 
          hasExtraNote: 'mokgwanga_edu',
          detail: '🎟️ 需門票 / 了解朝鮮時代濟州政治與行政組織的關鍵遺址。' 
        },
        { 
          time: '17:30', 
          activity: 'The Islander & 七星街 🛍️', 
          hasExtraNote: 'the_islander',
          detail: '逛街採買，觀察當地商業區發展。' 
        },
        { 
          time: '18:30', 
          activity: '梨湖 海邊小馬燈塔 📷', 
          detail: '紅白小馬象徵濟州「喬馬」文化的傳承。' 
        },
        { 
          time: '19:30', 
          activity: '入住 Villa de Aewol 🏠', 
          detail: 'Check-in 後稍作休息，準備晚餐。' 
        },
        { 
          time: '20:00', 
          activity: 'Wonwoojeong 韓牛 🥩', 
          hasExtraNote: 'wonwoojeong',
          detail: '犒賞級饗宴，注意生冷醬蟹的食用提醒。' 
        }
      ]
    },
    {
      id: 'day6',
      title: 'DAY 6 (03/28) Sat.',
      subtitle: '文青選物與悠閒午後',
      icon: '🛍️',
      dailyNote: '🛍️ 把握在濟州島的最後一個完整白天！今天走悠閒文青路線，買買可愛小物、喝喝咖啡，享受愜意時光 ☕️',
      schedule: [
        { 
          time: '09:00', 
          activity: '海螺湯麵 🍴', 
          hasExtraNote: 'conch_noodle',
          detail: '08:00-15:00。道地美味，開啟活力的一天！' 
        },
        { 
          time: '11:00', 
          activity: 'mumujeju 選物店 🎁', 
          hasExtraNote: 'mumujeju',
          detail: '11:00-18:00 (週四五公休)。濟州島必逛的超萌文創小店！' 
        },
        { 
          time: '13:30', 
          activity: '麗芬聚 🍴', 
          hasExtraNote: 'lifenju',
          detail: '📅 記得一定要提前預約喔！' 
        },
        { 
          time: '15:30', 
          activity: '逛街伴手禮 & 咖啡廳 ☕️', 
          hasExtraNote: 'last_shopping',
          detail: '把握最後時間採買伴手禮，找間美美的咖啡廳坐著放空。' 
        }
      ]
    },
    {
      id: 'day7',
      title: 'DAY 7 (03/29) Sun.',
      subtitle: '平安回家，滿載而歸',
      icon: '👋',
      dailyNote: '🎁 行李箱塞滿了嗎？退稅單要收好，記得留點時間去機場最後巡禮，把濟州島的香氣帶回家！',
      schedule: [
        { 
          time: '07:00', 
          activity: '天使租車還車 🚗', 
          hasExtraNote: 'shuttle_info',
          detail: '抵達租車中心，處理還車手續。' 
        },
        { 
          time: '07:20', 
          activity: '搭接駁車到濟州機場 🚌', 
          detail: '處理退稅手續。抵達機場後，第一件事先去處理退稅與行李託運！' 
        },
        { 
          time: '10:40', 
          activity: '班機起飛返家 ✈️', 
          detail: 'Bye Bye Jeju! 帶著滿滿的回憶與橘子香氣回家。' 
        }
      ]
    }
  ];

  const ScrapbookCover = () => (
    <div className="min-h-screen bg-[#FFF9F0] flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-700 cute-font relative overflow-hidden">
      <div className="absolute top-10 left-10 text-4xl opacity-50 animate-bounce">🍊</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-50 animate-pulse">✨</div>
      <div className="absolute top-1/4 right-20 text-3xl opacity-50">🌼</div>
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(255,152,0,0.25)] border-8 border-[#FFD8B2] relative flex flex-col overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-10 bg-gradient-to-r from-yellow-200 to-orange-200 opacity-80 -rotate-2 z-20 rounded-sm shadow-sm"></div>
        <div className="flex-grow flex flex-col items-center justify-center p-8 border-4 border-dashed border-orange-200 m-4 rounded-[2rem] bg-gradient-to-b from-white to-orange-50/50">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-5 py-2 rounded-full mb-6 font-bold text-sm tracking-widest shadow-md flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" /> 2026 SPRING
          </div>
          <h1 className="text-5xl font-black text-[#FF9800] text-center leading-tight mb-2 tracking-wide drop-shadow-sm">濟州島</h1>
          <h2 className="text-3xl font-black text-[#78C2AD] text-center mb-6 bg-white px-4 py-1 rounded-2xl shadow-sm border-2 border-teal-100 rotate-1">探險手帳 🧸</h2>
          <div className="relative w-48 h-48 mb-8 group">
             <div className="absolute inset-0 bg-[#FFE0B2] rounded-full flex items-center justify-center text-8xl shadow-inner border-4 border-white transition-transform group-hover:scale-110 duration-300">🍊</div>
             <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg animate-bounce">
               <CameraIcon className="w-8 h-8 text-orange-400" />
             </div>
          </div>
          <button onClick={() => setView('guide')} className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-[#FF9800] rounded-full hover:bg-[#F57C00] hover:shadow-[0_8px_20px_rgba(255,152,0,0.4)] hover:-translate-y-1">
            <span className="text-lg">翻開手帳</span> 
            <Heart className="ml-2 w-5 h-5 fill-white group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  if (view === 'cover') return <ScrapbookCover />;

  return (
    <div className="min-h-screen bg-[#FFFDF8] p-2 sm:p-4 md:p-8 cute-font text-[#5A4A42] selection:bg-orange-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-6 md:mb-8">
        <button onClick={() => setView('cover')} className="flex items-center text-[#FF9800] font-bold hover:bg-white transition-all bg-orange-100/50 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md border border-orange-200 text-sm sm:text-base">
          <ArrowLeft className="mr-1.5 sm:mr-2 w-4 h-4" /> 返回封面
        </button>
        <div className="flex items-center gap-1.5 sm:gap-2 text-[#FF9800] font-black text-lg sm:text-xl bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm border border-orange-100">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-orange-400 text-orange-400 animate-pulse" /> JEJU 2026
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6">
        <aside className="md:w-52 flex-shrink-0 z-10">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 sm:gap-3 pb-2 sm:pb-4 md:pb-0 no-scrollbar px-1">
            <button onClick={() => setActiveTab('checklist')} className={`flex-shrink-0 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-full transition-all text-xs sm:text-sm font-black flex items-center shadow-sm ${activeTab === 'checklist' ? 'bg-[#FF9800] text-white shadow-md shadow-orange-200 translate-x-1 md:translate-x-2' : 'bg-white text-orange-400 hover:bg-orange-50'}`}>
              <Bookmark className="mr-1.5 sm:mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4" /> 行前清單
            </button>
            {days.map((day) => (
              <button key={day.id} onClick={() => setActiveTab(day.id)} className={`flex-shrink-0 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-full transition-all text-xs sm:text-sm font-black flex items-center shadow-sm ${activeTab === day.id ? 'bg-[#FF9800] text-white shadow-md shadow-orange-200 translate-x-1 md:translate-x-2' : 'bg-white text-orange-400 hover:bg-orange-50'}`}>
                <span className="mr-2 sm:mr-3 text-base sm:text-lg">{day.icon}</span> {day.id.toUpperCase()}
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-grow bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-10 shadow-[0_10px_40px_rgba(255,152,0,0.15)] border-2 sm:border-4 border-orange-50 min-h-[600px] relative overflow-hidden">
          
          {activeTab === 'checklist' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-inner">🧳</div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#FF9800]">我的行李箱</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-2 sm:space-y-3">
                   {Object.entries(checkedItems).map(([item, isChecked]) => (
                    <div key={item} onClick={() => toggleItem(item)} className={`flex items-start sm:items-center p-3 sm:p-4 rounded-2xl sm:rounded-3xl cursor-pointer transition-all border-2 ${isChecked ? 'bg-gray-50 border-gray-100 opacity-60' : 'bg-white border-orange-100 hover:border-orange-300 hover:shadow-md'}`}>
                      <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full mr-3 sm:mr-4 mt-0.5 sm:mt-0 flex-shrink-0 flex items-center justify-center transition-colors ${isChecked ? 'bg-orange-400' : 'bg-orange-50 border-2 border-orange-200'}`}>
                        {isChecked && <CheckSquareIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />}
                      </div>
                      <span className={`flex-1 font-bold text-sm sm:text-base leading-snug break-words ${isChecked ? 'line-through text-gray-400' : 'text-[#5A4A42]'}`}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#FFF9C4] p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border-2 border-yellow-200 rotate-1 sm:rotate-2 shadow-sm relative h-fit mt-4 lg:mt-0">
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-6 sm:h-8 bg-orange-200/60 rotate-2 rounded-sm"></div>
                  <h4 className="font-black text-yellow-700 flex items-center mb-3 sm:mb-4 text-base sm:text-lg"><StickyNote className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> 貼心小備忘 🧸</h4>
                  <ul className="text-xs sm:text-sm text-yellow-800/80 leading-relaxed sm:leading-loose space-y-2 font-bold">
                    <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="text-yellow-500">🍊</span> <span>網卡領取：KKday 方案在桃機 / Klook 是機台</span></li>
                    <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="text-yellow-500">🍊</span> <span>現金換匯：濟州機場外的都可以現金換匯唷！</span></li>
                    <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="text-yellow-500">🍊</span> <span>租車注意：台灣汽車、機車駕照正本都要帶齊！</span></li>
                    <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="text-yellow-500">🍊</span> <span>入境提醒：別忘了 72hrs 前填寫電子入境卡</span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {days.map((day) => activeTab === day.id && (
            <div key={day.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="mb-6 md:mb-8 border-b-2 border-dashed border-orange-100 pb-4 md:pb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF9800] mb-2 flex items-center gap-2 sm:gap-3">{day.title}</h2>
                <div className="inline-block bg-teal-50 text-teal-500 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-bold text-xs sm:text-sm border border-teal-100">{day.subtitle} ✨</div>
              </div>
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] mb-8 md:mb-10 shadow-sm flex gap-3 sm:gap-4 items-center border-2 border-white relative">
                <div className="absolute -top-3 -right-3 text-2xl sm:text-3xl animate-bounce-slow">🌼</div>
                <div className="bg-white p-2.5 sm:p-3 rounded-full shadow-sm text-orange-400 flex-shrink-0"><Wand2 className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                <p className="text-xs sm:text-sm font-bold leading-relaxed text-[#7A6A62] break-words">{day.dailyNote}</p>
              </div>

              <div className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:ml-[1.1rem] md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-orange-100 before:to-yellow-100 before:rounded-full">
                {day.schedule.map((item, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border-[3px] md:border-4 border-orange-200 font-black text-[10px] md:text-xs text-orange-500 shadow-sm z-10 md:mx-auto absolute left-0 md:left-1/2 md:-translate-x-1/2 group-hover:scale-110 group-hover:border-pink-300 transition-transform flex-shrink-0">
                      {item.time.split(':')[0]}<span className="text-[8px] mt-0.5 md:mt-1">{item.time.split(':')[1]}</span>
                    </div>
                    <div className="w-[calc(100%-2.75rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] bg-white border-2 border-orange-50 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-base sm:text-lg font-black text-[#5A4A42] mb-2 sm:mb-3 flex items-start sm:items-center gap-2 leading-tight">{item.activity}</h4>
                      {item.isTask && (
                        <div onClick={() => toggleTripTask(item.taskId)} className={`flex items-start p-2.5 sm:p-3 rounded-[1rem] sm:rounded-2xl cursor-pointer mb-3 transition-colors ${tripTasks[item.taskId] ? 'bg-green-50 border-2 border-green-100 opacity-70' : 'bg-orange-50 border-2 border-orange-100 hover:bg-orange-100'}`}>
                          <div className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 rounded-full mr-2.5 sm:mr-3 mt-0.5 flex items-center justify-center ${tripTasks[item.taskId] ? 'bg-green-400' : 'bg-white border-2 border-orange-200'}`}>{tripTasks[item.taskId] && <CheckSquareIcon className="w-3 h-3 text-white" />}</div>
                          <span className={`flex-1 text-xs sm:text-sm font-bold leading-snug break-words ${tripTasks[item.taskId] ? 'line-through text-green-600' : 'text-orange-600'}`}>{item.taskText}</span>
                        </div>
                      )}
                      <p className="text-xs sm:text-sm text-[#8A7A72] font-bold bg-[#FDFBFB] p-3 sm:p-4 rounded-[1rem] sm:rounded-2xl border-2 border-dashed border-gray-100 leading-relaxed break-words">{item.detail}</p>
                      
                      {/* === 防彈級 (Bulletproof) 彈性網格排版 === */}
                      
                      {item.hasExtraNote === 'sanbangsan_edu' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-yellow-50 rounded-[1rem] md:rounded-2xl border-2 border-yellow-200 text-xs font-bold text-yellow-800 shadow-sm">
                           <h5 className="font-black text-yellow-700 mb-2 flex items-center text-sm"><BookOpen className="w-4 h-4 mr-1 flex-shrink-0" /> 山房山：地質演化與神話起源 ⛰️</h5>
                           <ul className="bg-white p-2.5 md:p-3.5 rounded-xl border border-yellow-200 shadow-sm">
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-yellow-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="text-base mt-[1px] w-5 text-center">🌋</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-yellow-600">地質構造</span>
                                   <span className="leading-relaxed break-words text-yellow-700/90">與常見的噴火口火山不同，山房山是由粘性極強的<b>粗面岩質熔岩</b>噴發後，原地堆積而成的「鐘狀火山」。是世界地質公園核心景點。</span>
                                </div>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-yellow-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="text-base mt-[1px] w-5 text-center">📜</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-yellow-600">神話背景</span>
                                   <span className="leading-relaxed break-words text-yellow-700/90">傳說是被神仙從漢拏山山頂拔起後丟擲至此。現代地質分析證實其岩質與漢拏山頂白鹿潭極為相似，展現了神話與科學的巧妙重合。</span>
                                </div>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-yellow-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="text-base mt-[1px] w-5 text-center">📸</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-yellow-600">當代特色</span>
                                   <span className="leading-relaxed break-words text-yellow-700/90">每年三月，山腳下綻放的<b>金黃色油菜花田</b>與深色雄偉的岩牆形成極致視覺對比，是濟州春季最具代表性的地標景觀。</span>
                                </div>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'samseonghyeol_edu' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-pink-50 rounded-[1rem] md:rounded-2xl border-2 border-pink-100 text-xs font-bold text-pink-800 shadow-sm">
                           <h5 className="font-black text-pink-600 mb-2 flex items-center text-sm"><ScrollText className="w-4 h-4 mr-1 flex-shrink-0" /> 三姓穴：耽羅文明與自然奇觀 🌸</h5>
                           <ul className="bg-white p-2.5 md:p-3.5 rounded-xl border border-pink-200 shadow-sm">
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-pink-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="text-base mt-[1px] w-5 text-center">📜</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-pink-500">歷史由來</span>
                                   <span className="leading-relaxed break-words text-pink-700/90">相傳是高、良、夫三位始祖從三個地穴中浮現，並在此定居開啟了農耕文明，奠定了古代<b>「耽羅王國」</b>的根基。</span>
                                </div>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-pink-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="text-base mt-[1px] w-5 text-center">❄️</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-pink-500">獨特現象</span>
                                   <span className="leading-relaxed break-words text-pink-700/90">即便在降雪頻仍的濟州冬季，穴口內部也<b>從不積雪</b>且排水通暢，周邊神木森林的樹枝皆向穴位傾斜。</span>
                                </div>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-pink-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="text-base mt-[1px] w-5 text-center">📸</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-pink-500">春季意象</span>
                                   <span className="leading-relaxed break-words text-pink-700/90">被視為濟州島內最高雅的賞櫻地。古樸木造典禮廳舍與千年古樹、淡粉櫻花交織，是絕佳攝影地。</span>
                                </div>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'mokgwanga_edu' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-indigo-50 rounded-[1rem] md:rounded-2xl border-2 border-indigo-100 text-xs font-bold text-indigo-800 shadow-sm">
                           <h5 className="font-black text-indigo-600 mb-2 flex items-center text-sm"><Landmark className="w-4 h-4 mr-1 flex-shrink-0" /> 濟州牧官衙：五百年的權力中心 🏯</h5>
                           <ul className="bg-white p-2.5 md:p-3.5 rounded-xl border border-indigo-200 shadow-sm">
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-indigo-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="text-base mt-[1px] w-5 text-center">⏳</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-indigo-500">政治歷史</span>
                                   <span className="leading-relaxed break-words text-indigo-700/90">朝鮮時代濟州島的<b>最高行政與政治核心</b>。曾是牧使處理公務、審理司法的場所。</span>
                                </div>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-indigo-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="text-base mt-[1px] w-5 text-center">🏛️</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-indigo-500">建築瑰寶</span>
                                   <span className="leading-relaxed break-words text-indigo-700/90">園區內的「觀德亭」是濟州<b>現存最古老的木造建築</b>（1448年）。其屋簷下的戰鬥壁畫具備極高藝術價值。</span>
                                </div>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-indigo-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="text-base mt-[1px] w-5 text-center">✨</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-indigo-500">文化看點</span>
                                   <span className="leading-relaxed break-words text-indigo-700/90">修復後的官衙重現了精緻的傳統庭園與池塘。遊客還能在此參與韓服體驗與古代射箭活動。</span>
                                </div>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'olle_market' && (
                        <div className="mt-3 md:mt-4 p-4 md:p-5 bg-orange-50 rounded-[1rem] md:rounded-2xl border-2 border-orange-100 relative overflow-hidden shadow-sm">
                           <h5 className="font-black text-orange-600 mb-3 flex items-center text-sm"><ShoppingBag className="w-4 h-4 mr-1 flex-shrink-0" /> 必吃清單 🤤</h5>
                           <div className="grid grid-cols-2 gap-2 sm:gap-3">
                              <div className="bg-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border-2 border-orange-200 flex flex-col items-center justify-center text-center shadow-sm hover:scale-105 transition-transform group/item">
                                <div className="text-2xl sm:text-3xl mb-1 group-hover/item:animate-bounce">🍣🔥</div>
                                <span className="text-[10px] sm:text-xs font-black text-orange-700">炸壽司</span>
                              </div>
                              <div className="bg-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border-2 border-orange-200 flex flex-col items-center justify-center text-center shadow-sm hover:scale-105 transition-transform group/item">
                                <div className="text-2xl sm:text-3xl mb-1 group-hover/item:animate-bounce">🥖🧄</div>
                                <span className="text-[10px] sm:text-xs font-black text-orange-700">蒜香麵包</span>
                              </div>
                           </div>
                        </div>
                      )}

                      {item.hasExtraNote === 'udo_strategy' && (
                        <div className="mt-3 md:mt-4 p-4 md:p-5 bg-yellow-50 rounded-[1rem] md:rounded-2xl border-2 border-yellow-100 relative overflow-hidden shadow-sm">
                           <h5 className="font-black text-yellow-700 mb-3 flex items-center text-sm"><MapPin className="w-4 h-4 mr-1 flex-shrink-0" /> 牛島環島精華攻略 🚌</h5>
                           <div className="space-y-3 text-xs text-yellow-800">
                              <div className="bg-white p-3 sm:p-4 rounded-[1rem] sm:rounded-2xl border-2 border-yellow-200 shadow-sm">
                                <span className="font-black text-yellow-600 block mb-2">🎫 島上交通怎麼選？</span>
                                <span className="leading-relaxed font-bold break-words">首推<b>海岸道路觀光巴士</b>！買一日券可隨上隨下超方便。若想租超 Q 雙人電動車，記得出示<b>國際駕照正本</b>喔！(看船班停靠「天津港」或「下牛木洞港」皆可出發)</span>
                              </div>
                              <div className="bg-white p-3 sm:p-4 rounded-[1rem] sm:rounded-2xl border-2 border-yellow-200 shadow-sm">
                                <span className="font-black text-yellow-600 block mb-2">🌟 必下車的 3 大神級景點</span>
                                <ul className="space-y-3 font-bold mt-2">
                                  <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="text-base sm:text-lg leading-none mt-[2px]">🍿</span> <span className="break-words"><b>西濱白沙：</b>罕見的珊瑚礁沙灘，沙子長得像爆米花！</span></li>
                                  <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="text-base sm:text-lg leading-none mt-[2px]">🍦</span> <span className="break-words"><b>檢無魯海岸 (黑沙灘)：</b>必吃牛島花生冰淇淋，還能搭刺激快艇看牛島八景。</span></li>
                                  <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="text-base sm:text-lg leading-none mt-[2px]">🌊</span> <span className="break-words"><b>下高水洞海水浴場：</b>漸層玻璃海超美，周邊很多絕美海景咖啡廳。</span></li>
                                </ul>
                              </div>
                           </div>
                        </div>
                      )}

                      {item.hasExtraNote === 'ilchulbong_route' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-green-50 rounded-[1rem] md:rounded-2xl border-2 border-green-100 text-xs font-bold text-green-800 shadow-sm">
                           <h5 className="font-black text-green-600 mb-2 flex items-center text-sm"><MapPin className="w-4 h-4 mr-1 flex-shrink-0" /> 路線二選一 ❗️</h5>
                           <ul className="space-y-2 sm:space-y-1.5 leading-relaxed bg-white p-2.5 md:p-3.5 rounded-xl border border-green-200">
                              <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="mt-[1px]">🎟️</span> <span className="break-words"><b>攻頂付費：</b>需買門票 / 來回兩小時。盡收火山口美景。</span></li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="mt-[1px]">🌊</span> <span className="break-words"><b>左側免費：</b>免買門票 / 輕鬆散步。適合不想爬樓梯看海景。</span></li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'udo_terminal' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-blue-50 rounded-[1rem] md:rounded-2xl border-2 border-blue-100 text-xs font-bold text-blue-800 shadow-sm">
                           <h5 className="font-black text-blue-600 mb-2 flex items-center text-sm"><Ship className="w-4 h-4 mr-1 flex-shrink-0" /> 乘船必備秘笈 🎫</h5>
                           <ul className="space-y-2 sm:space-y-1.5 leading-relaxed bg-white p-2.5 md:p-3.5 rounded-xl border border-blue-200">
                              <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="text-blue-500 mt-[1px]">🔹</span> <span className="break-words"><b>購票：</b>來回 8,500₩ (去5千/回3千5)。務必帶<b>護照正本</b>查驗！</span></li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="text-blue-500 mt-[1px]">🔹</span> <span className="break-words"><b>表單：</b>乘船申請書一次填<b> 2 張</b>。搭船時需出示<b>船票＋申請書</b>。</span></li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="text-blue-500 mt-[1px]">🔹</span> <span className="break-words"><b>船班：</b>約半小時一班。下牛木洞港末班較早，請抓 <b className="text-red-500">16:00 為末班船</b>！</span></li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'aqua_planet' && (
                        <div className="mt-3 md:mt-4 p-4 md:p-5 bg-cyan-50 rounded-[1rem] md:rounded-2xl border-2 border-cyan-100 relative overflow-hidden shadow-sm">
                           <h5 className="font-black text-cyan-700 mb-3 flex items-center text-sm"><Anchor className="w-4 h-4 mr-1 flex-shrink-0" /> 必看表演時刻表 🐬</h5>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 text-xs text-cyan-800 font-bold">
                              <div className="bg-white p-2.5 sm:p-3 rounded-[1rem] border-2 border-cyan-200">
                                <span className="font-black text-cyan-600 block mb-1">🌊 海洋劇場 (40mins)</span>
                                <span>10:50 / 12:50 / 14:50 / 16:20</span>
                              </div>
                              <div className="bg-white p-2.5 sm:p-3 rounded-[1rem] border-2 border-cyan-200">
                                <span className="font-black text-cyan-600 block mb-1">🧜‍♀️ B1 海女潛水 (10mins)</span>
                                <span>10:00 / 12:00 / 14:00 / 15:40</span>
                              </div>
                           </div>
                        </div>
                      )}

                      {item.hasExtraNote === 'shopping_day2' && (
                        <div className="mt-3 md:mt-4 p-4 md:p-5 bg-pink-50 rounded-[1rem] md:rounded-2xl border-2 border-pink-100 relative overflow-hidden shadow-sm">
                           <h5 className="font-black text-pink-600 mb-3 flex items-center text-sm"><ShoppingBag className="w-4 h-4 mr-1 flex-shrink-0" /> 逛街血拼攻略 🛍️</h5>
                           <ul className="space-y-2 text-xs font-bold text-pink-700/80 bg-white p-3 rounded-[1rem] border border-pink-200">
                              <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="text-pink-400 mt-[1px]">✨</span> <span className="break-words"><b>七星街：</b>採購北鼻的衣服 ❗️</span></li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="text-pink-400 mt-[1px]">✨</span> <span className="break-words"><b>大創 DAISO：</b>營業時間 10:00-22:00。</span></li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2"><span className="text-pink-400 mt-[1px]">✨</span> <span className="break-words"><b>Gentle Monster：</b>想買墨鏡可至 新羅免稅店 2F 或 樂天免稅店 1F。</span></li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'photo_studio' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-stone-50 rounded-[1rem] md:rounded-2xl border-2 border-stone-200 text-xs font-bold text-stone-700 shadow-sm">
                           <h5 className="font-black text-stone-800 mb-2 flex items-center text-sm"><CameraIcon className="w-4 h-4 mr-1 flex-shrink-0" /> 寫真價目表 (韓幣) 📸</h5>
                           <ul className="bg-white p-2.5 sm:p-3.5 rounded-xl border border-stone-200">
                              <li className="flex items-start justify-between gap-3 pb-2 mb-2 border-b border-stone-50 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-start gap-1.5">
                                  <span className="text-stone-400 mt-[1px]">🖤</span> 
                                  <span className="font-black break-words">黑白寫真</span>
                                </div>
                                <span className="text-stone-600 whitespace-nowrap flex-shrink-0">6,000 ₩</span>
                              </li>
                              <li className="flex items-start justify-between gap-3 pb-2 mb-2 border-b border-stone-50 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-start gap-1.5">
                                  <span className="text-stone-400 mt-[1px]">💖</span> 
                                  <span className="font-black break-words">彩色寫真</span>
                                </div>
                                <span className="text-stone-600 whitespace-nowrap flex-shrink-0">12,000 ₩</span>
                              </li>
                              <li className="flex items-start justify-between gap-3 pb-2 mb-2 border-b border-stone-50 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-start gap-1.5">
                                  <span className="text-stone-400 mt-[1px]">🎞️</span> 
                                  <span className="font-black break-words">黑白底片</span>
                                </div>
                                <span className="text-stone-600 whitespace-nowrap flex-shrink-0">10,000 ₩</span>
                              </li>
                              <li className="flex items-start justify-between gap-3 pb-2 mb-2 border-b border-stone-50 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-start gap-1.5">
                                  <span className="text-stone-400 mt-[1px]">🖼️</span> 
                                  <span className="font-black break-words">專屬相框</span>
                                </div>
                                <span className="text-[10px] bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-md shadow-sm text-stone-500 whitespace-nowrap flex-shrink-0 mt-0.5">現場加購</span>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'donsadon_south' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-red-50 rounded-[1rem] md:rounded-2xl border-2 border-red-100 text-xs font-bold text-red-800 shadow-sm">
                           <h5 className="font-black text-red-600 mb-2 flex items-center text-sm"><Utensils className="w-4 h-4 mr-1 flex-shrink-0" /> 豚似豚 點餐＆吃法攻略 🍖</h5>
                           <p className="text-red-500 mb-2 leading-relaxed break-words">🔥 南部分店務必「網路預約」！全程有專人代烤～</p>
                           <ul className="bg-white p-2.5 sm:p-3 rounded-xl border border-red-200 shadow-sm mb-2">
                              <li className="flex items-start justify-between gap-2 border-b border-red-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-start gap-1.5">
                                  <span className="mt-[1px]">🐖</span> 
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-1.5">
                                    <span className="font-black text-red-600 break-words">黑豬肉雙人份</span> 
                                    <span className="text-red-400 text-[10px] sm:text-xs">600g</span>
                                  </div>
                                </div> 
                                <span className="font-black text-red-600 whitespace-nowrap flex-shrink-0 mt-[1px]">66,000 ₩</span>
                              </li>
                              <li className="flex items-start justify-between gap-2 border-b border-red-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-start gap-1.5">
                                  <span className="mt-[1px]">🐖</span> 
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-1.5">
                                    <span className="font-black text-red-600 break-words">黑豬肉三人份</span> 
                                    <span className="text-red-400 text-[10px] sm:text-xs">800g</span>
                                  </div>
                                </div> 
                                <span className="font-black text-red-600 whitespace-nowrap flex-shrink-0 mt-[1px]">88,000 ₩</span>
                              </li>
                              <li className="flex items-start justify-between gap-2 border-b border-red-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-start gap-1.5">
                                  <span className="mt-[1px]">🥘</span> 
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-1.5">
                                    <span className="font-black text-orange-600 break-words">泡菜燉湯</span> 
                                    <span className="text-red-400 text-[10px] sm:text-xs">小鍋</span>
                                  </div>
                                </div> 
                                <span className="font-black text-red-600 whitespace-nowrap flex-shrink-0 mt-[1px]">9,000 ₩</span>
                              </li>
                              <li className="flex items-start justify-between gap-2 border-b border-red-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-start gap-1.5">
                                  <span className="mt-[1px]">🍚</span> 
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-1.5">
                                    <span className="font-black text-orange-600 break-words">白飯</span> 
                                    <span className="text-red-400 text-[10px] sm:text-xs">一碗</span>
                                  </div>
                                </div> 
                                <span className="font-black text-red-600 whitespace-nowrap flex-shrink-0 mt-[1px]">1,000 ₩</span>
                              </li>
                           </ul>
                           <p className="text-[10px] text-red-400/80 mb-2 pl-1 break-words">* 另有白豬肉 44,000₩/400g (加點 100g 11,000₩)</p>
                           <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-red-200 shadow-sm leading-relaxed mt-2">
                              <span className="font-black text-red-600 block mb-1.5">✨ 推薦吃法攻略：</span>
                              <ul className="space-y-1.5 text-[11px] sm:text-xs font-bold text-red-700/80">
                                 <li className="grid grid-cols-[auto_1fr] gap-x-1.5"><span className="text-red-400 mt-[1px]">1️⃣</span> <span className="break-words">放生菜絲沾醬配著肉吃。</span></li>
                                 <li className="grid grid-cols-[auto_1fr] gap-x-1.5"><span className="text-red-400 mt-[1px]">2️⃣</span> <span className="break-words">放在芥末醃蘿蔔片上包著肉一起吃。</span></li>
                                 <li className="grid grid-cols-[auto_1fr] gap-x-1.5"><span className="text-red-400 mt-[1px]">3️⃣</span> <span className="break-words"><b className="text-red-600">最受歡迎吃法：</b>將烤肉配著泡菜！</span></li>
                              </ul>
                           </div>
                        </div>
                      )}

                      {item.hasExtraNote === 'park_981' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-orange-50 rounded-[1rem] md:rounded-2xl border-2 border-orange-100 text-xs font-bold text-orange-800 shadow-sm">
                           <h5 className="font-black text-orange-600 mb-2 flex items-center text-sm"><Car className="w-4 h-4 mr-1 flex-shrink-0" /> 9.81 公園攻略 🏎️</h5>
                           <ul className="bg-white p-2.5 md:p-3.5 rounded-xl border border-orange-200 shadow-sm">
                              <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 border-b border-orange-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">🎟️</span> 
                                  <span className="font-black text-orange-500">門票建議</span>
                                </div>
                                <span className="font-black text-orange-700 pl-6.5 sm:pl-0 break-words">NT$ 751 <span className="text-[10px] text-orange-400 ml-1 font-bold whitespace-nowrap">(建議只買動力賽車)</span></span>
                              </li>
                              <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 border-b border-orange-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">📅</span> 
                                  <span className="font-black text-orange-500">預約方式</span>
                                </div>
                                <span className="font-black text-red-500 pl-6.5 sm:pl-0 break-words">務必網路預約 ❗️</span>
                              </li>
                              <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 border-b border-orange-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">⏰</span> 
                                  <span className="font-black text-orange-500">營業時間</span>
                                </div>
                                <span className="font-black text-orange-700 pl-6.5 sm:pl-0 break-words">09:30 - 18:00</span>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'jaemi_jeju' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-yellow-50 rounded-[1rem] md:rounded-2xl border-2 border-yellow-100 text-xs font-bold text-yellow-800 shadow-sm">
                           <h5 className="font-black text-yellow-600 mb-2 flex items-center text-sm"><Utensils className="w-4 h-4 mr-1 flex-shrink-0" /> Jaemi Jeju 義大利麵 🍝</h5>
                           <ul className="bg-white p-2.5 md:p-3.5 rounded-xl border border-yellow-200 shadow-sm">
                              <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 border-b border-yellow-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">📞</span> 
                                  <span className="font-black text-yellow-500">預約方式</span>
                                </div>
                                <span className="font-black text-red-500 pl-6.5 sm:pl-0 break-words">務必電話預約 ❗️</span>
                              </li>
                              <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 border-b border-yellow-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">⏰</span> 
                                  <span className="font-black text-yellow-500">營業時間</span>
                                </div>
                                <span className="font-black text-yellow-700 pl-6.5 sm:pl-0 break-words">11:00-15:00, 17:00-19:20</span>
                              </li>
                              <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 border-b border-yellow-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">❌</span> 
                                  <span className="font-black text-yellow-500">公休時間</span>
                                </div>
                                <span className="font-black text-yellow-700 pl-6.5 sm:pl-0 break-words">週二、週三公休</span>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'haejigae_cafe' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-amber-50 rounded-[1rem] md:rounded-2xl border-2 border-amber-100 text-xs font-bold text-amber-800 shadow-sm">
                           <h5 className="font-black text-amber-600 mb-2 flex items-center text-sm"><Sun className="w-4 h-4 mr-1 flex-shrink-0" /> 絕美日落咖啡廳 🌅</h5>
                           <div className="bg-white px-3 py-2.5 rounded-xl border border-amber-200 shadow-sm leading-relaxed grid grid-cols-[auto_1fr] gap-x-2">
                              <span className="font-black text-amber-600 mt-[1px]">✨</span>
                              <div>
                                 <span className="font-black text-amber-600 block mb-0.5">必吃推薦：</span>
                                 <span className="text-amber-700/80 break-words">🥐 鹽麵包 ｜ 🥐 丹麥麵包</span>
                              </div>
                           </div>
                        </div>
                      )}

                      {item.hasExtraNote === 'jusangjeolli' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-slate-50 rounded-[1rem] md:rounded-2xl border-2 border-slate-200 text-xs font-bold text-slate-800 shadow-sm">
                           <h5 className="font-black text-slate-700 mb-2 flex items-center text-sm"><MapPin className="w-4 h-4 mr-1 flex-shrink-0" /> 柱狀節理帶 觀看重點 🌋</h5>
                           <ul className="bg-white p-2.5 md:p-3.5 rounded-xl border border-slate-200 shadow-sm">
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-slate-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="w-5 text-center mt-[1px]">📍</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-slate-500">所在位置</span>
                                   <span className="font-black text-slate-700 leading-relaxed break-words">西歸浦 中文觀光區</span>
                                </div>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-slate-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="w-5 text-center mt-[1px]">🌋</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-slate-500">行程小知識</span>
                                   <span className="font-bold text-slate-700 leading-relaxed break-words">漢拏山噴發的熔岩流入海中，遇海水<b className="text-slate-900">急速冷卻收縮</b>，瞬間龜裂成壯觀的垂直六角形石柱群！</span>
                                </div>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-slate-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="w-5 text-center mt-[1px]">📸</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-slate-500">必拍亮點</span>
                                   <span className="font-bold text-slate-700 leading-relaxed break-words">沿著木棧道漫步，欣賞海浪強烈拍打六角岩石的磅礴絕景。</span>
                                </div>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'hallasan_bakery' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-emerald-50 rounded-[1rem] md:rounded-2xl border-2 border-emerald-100 text-xs font-bold text-emerald-800 shadow-sm">
                           <h5 className="font-black text-emerald-600 mb-2 flex items-center text-sm"><Gift className="w-4 h-4 mr-1 flex-shrink-0" /> 兩種推薦禮盒特色 🎁</h5>
                           <div className="space-y-3 sm:space-y-2">
                              <div className="bg-white p-2.5 sm:p-3.5 rounded-xl border border-emerald-200 shadow-sm">
                                 <div className="flex items-start justify-between gap-2 border-b border-emerald-50 pb-2 mb-2">
                                    <div className="flex items-start gap-1.5">
                                      <span className="mt-[1px]">🤎</span>
                                      <span className="font-black text-emerald-700 break-words">漢拏山夾心餅乾 (棕)</span>
                                    </div>
                                    <span className="font-black text-emerald-600 whitespace-nowrap flex-shrink-0 mt-[1px]">15,000 ₩</span>
                                 </div>
                                 <ul className="space-y-1.5 text-[11px] text-emerald-700/80 leading-relaxed">
                                    <li className="grid grid-cols-[auto_1fr] gap-x-1.5"><span className="text-emerald-400 mt-[1px]">✨</span> <span className="break-words"><b>綠茶巧克力夾心：</b>濟州新鮮抹茶 ✕ 濃郁黑巧甘納許。</span></li>
                                    <li className="grid grid-cols-[auto_1fr] gap-x-1.5"><span className="text-emerald-400 mt-[1px]">✨</span> <span className="break-words"><b>神級口感：</b>外層鬆軟，內餡像乳酪般醇厚，茶香與巧克力完美融合不甜膩！</span></li>
                                 </ul>
                              </div>
                              <div className="bg-white p-2.5 sm:p-3.5 rounded-xl border border-emerald-200 shadow-sm">
                                 <div className="flex items-start justify-between gap-2 border-b border-emerald-50 pb-2 mb-2">
                                    <div className="flex items-start gap-1.5">
                                      <span className="mt-[1px]">💛</span>
                                      <span className="font-black text-emerald-700 break-words">漢拏山綜合餅乾 (黃/綠)</span>
                                    </div>
                                    <span className="font-black text-emerald-600 whitespace-nowrap flex-shrink-0 mt-[1px]">12,000 ₩</span>
                                 </div>
                                 <ul className="space-y-1.5 text-[11px] text-emerald-700/80 leading-relaxed">
                                    <li className="grid grid-cols-[auto_1fr] gap-x-1.5"><span className="text-emerald-400 mt-[1px]">✨</span> <span className="break-words"><b>綜合 4 種口味：</b>漢拏峰柑橘、牛島花生、巧克力可可、濟州綠茶。</span></li>
                                    <li className="grid grid-cols-[auto_1fr] gap-x-1.5"><span className="text-emerald-400 mt-[1px]">✨</span> <span className="break-words"><b>送禮首選：</b>一次收集濟州島 3 大特產獨特風味，滿足多種享受。</span></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                      )}

                      {item.hasExtraNote === 'sisters_noodle' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-orange-50 rounded-[1rem] md:rounded-2xl border-2 border-orange-100 text-xs font-bold text-orange-800 shadow-sm">
                           <h5 className="font-black text-orange-600 mb-2 flex items-center text-sm"><Utensils className="w-4 h-4 mr-1 flex-shrink-0" /> 姊妹麵條 點餐攻略 🍜</h5>
                           <ul className="bg-white p-2.5 md:p-3.5 rounded-xl border border-orange-200 shadow-sm">
                              <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 border-b border-orange-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">📅</span> 
                                  <span className="font-black text-orange-500">預約方式</span>
                                </div>
                                <span className="font-black text-red-500 leading-relaxed pl-6.5 sm:pl-0 break-words">早上 08:20 務必先網路預約 ❗️</span>
                              </li>
                              <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 border-b border-orange-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">⏰</span> 
                                  <span className="font-black text-orange-500">營業時間</span>
                                </div>
                                <span className="font-black text-orange-700 leading-relaxed pl-6.5 sm:pl-0 break-words">09:00-14:20 / 16:10-18:00</span>
                              </li>
                              <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 border-b border-orange-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">🥢</span> 
                                  <span className="font-black text-orange-500">必點推薦</span>
                                </div>
                                <span className="font-black text-orange-700 leading-relaxed pl-6.5 sm:pl-0 break-words">豬肉湯麵 ｜ 拌麵 ｜ 白切肉</span>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'the_islander' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-teal-50 rounded-[1rem] md:rounded-2xl border-2 border-teal-100 text-xs font-bold text-teal-800 shadow-sm">
                           <h5 className="font-black text-teal-600 mb-2 flex items-center text-sm"><ShoppingBag className="w-4 h-4 mr-1 flex-shrink-0" /> 質感伴手禮推薦 🎁</h5>
                           <ul className="bg-white p-2.5 md:p-3.5 rounded-xl border border-teal-200 shadow-sm">
                              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3 border-b border-teal-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">⏰</span> 
                                  <span className="font-black text-teal-500">營業時間</span>
                                </div>
                                <span className="font-black text-teal-700 pl-6.5 sm:pl-0 break-words">10:30 - 19:00</span>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-teal-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="w-5 text-center mt-[1px]">✨</span> 
                                <span className="font-bold text-teal-700 leading-relaxed break-words"><b className="text-teal-600">The Islander：</b>超推買他們的<b className="text-teal-600">香水</b>當作濟州島專屬伴手禮！</span>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-teal-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="w-5 text-center mt-[1px]">🛍️</span> 
                                <span className="font-bold text-teal-700 leading-relaxed break-words"><b className="text-teal-600">七星購物街：</b>買完香水可以直接順路逛街血拼。</span>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'wonwoojeong' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-red-50 rounded-[1rem] md:rounded-2xl border-2 border-red-100 text-xs font-bold text-red-800 shadow-sm">
                           <h5 className="font-black text-red-600 mb-2 flex items-center text-sm"><Utensils className="w-4 h-4 mr-1 flex-shrink-0" /> Wonwoojeong 韓牛 🥩</h5>
                           <ul className="bg-white p-2.5 md:p-3.5 rounded-xl border border-red-200 shadow-sm">
                              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3 border-b border-red-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">⏰</span> 
                                  <span className="font-black text-red-500">營業時間</span>
                                </div>
                                <span className="font-black text-red-700 pl-6.5 sm:pl-0 break-words">15:30 - 21:00</span>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-red-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="w-5 text-center mt-[1px]">🍲</span> 
                                <span className="font-bold text-red-700 leading-relaxed break-words">推薦加點熱呼呼的 <b className="text-red-600">排骨大醬湯</b>！</span>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 bg-red-50 p-2 sm:p-2.5 rounded-lg border border-red-100 mt-2">
                                <span className="w-5 text-center mt-[1px] animate-pulse">⚠️</span> 
                                <span className="font-black text-red-600 leading-relaxed break-words">避雷警告：附贈的小菜有醬蟹，千萬不要吃肚子會抗議！</span>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'conch_noodle' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-orange-50 rounded-[1rem] md:rounded-2xl border-2 border-orange-100 text-xs font-bold text-orange-800 shadow-sm">
                           <h5 className="font-black text-orange-600 mb-2 flex items-center text-sm"><Utensils className="w-4 h-4 mr-1 flex-shrink-0" /> 海螺湯麵 必吃攻略 🍜</h5>
                           <ul className="bg-white p-2.5 md:p-3.5 rounded-xl border border-orange-200 shadow-sm">
                              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3 border-b border-orange-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">⏰</span> 
                                  <span className="font-black text-orange-500">營業時間</span>
                                </div>
                                <span className="font-black text-orange-700 pl-6.5 sm:pl-0 break-words">08:00 - 15:00</span>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-orange-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="w-5 text-center mt-[1px]">🥟</span> 
                                <span className="font-bold text-orange-700 leading-relaxed break-words"><b className="text-orange-600">蒸餃必點：</b>來這裡除了湯麵，絕對不能錯過他們家的招牌蒸餃！</span>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'mumujeju' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-yellow-50 rounded-[1rem] md:rounded-2xl border-2 border-yellow-100 text-xs font-bold text-yellow-800 shadow-sm">
                           <h5 className="font-black text-yellow-600 mb-2 flex items-center text-sm"><Gift className="w-4 h-4 mr-1 flex-shrink-0" /> mumujeju 採買筆記 🧸</h5>
                           <ul className="bg-white p-2.5 md:p-3.5 rounded-xl border border-yellow-200 shadow-sm">
                              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3 border-b border-yellow-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">⏰</span> 
                                  <span className="font-black text-yellow-500">營業時間</span>
                                </div>
                                <span className="font-black text-yellow-700 pl-6.5 sm:pl-0 break-words">11:00 - 18:00</span>
                              </li>
                              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3 border-b border-yellow-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">❌</span> 
                                  <span className="font-black text-yellow-500">公休時間</span>
                                </div>
                                <span className="font-black text-yellow-700 pl-6.5 sm:pl-0 break-words">週四、週五公休</span>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-yellow-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="w-5 text-center mt-[1px]">✨</span> 
                                <span className="font-bold text-yellow-700 leading-relaxed break-words">準備好錢包，裡面滿滿的可愛文創周邊跟小雜貨等你挖寶！</span>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'lifenju' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-rose-50 rounded-[1rem] md:rounded-2xl border-2 border-rose-100 text-xs font-bold text-rose-800 shadow-sm">
                           <h5 className="font-black text-rose-600 mb-2 flex items-center text-sm"><Utensils className="w-4 h-4 mr-1 flex-shrink-0" /> 麗芬聚 用餐提醒 🍽️</h5>
                           <ul className="bg-white p-2.5 md:p-3.5 rounded-xl border border-rose-200 shadow-sm">
                              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-5 text-center mt-[1px]">📅</span> 
                                  <span className="font-black text-rose-500">預約方式</span>
                                </div>
                                <span className="font-black text-red-500 pl-6.5 sm:pl-0 break-words">務必提前預約 ❗️</span>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'last_shopping' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-amber-50 rounded-[1rem] md:rounded-2xl border-2 border-amber-100 text-xs font-bold text-amber-800 shadow-sm">
                           <h5 className="font-black text-amber-600 mb-2 flex items-center text-sm"><Coffee className="w-4 h-4 mr-1 flex-shrink-0" /> 完美收尾提案 ☕️</h5>
                           <ul className="space-y-2 leading-relaxed mt-2 bg-white p-2.5 md:p-3.5 rounded-xl border border-amber-200 shadow-sm">
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-amber-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="w-5 text-center mt-[1px]">🛍️</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-amber-500">採買清單</span>
                                   <span className="font-bold text-amber-700 leading-relaxed break-words">做最後的清點，把沒買齊的伴手禮一次買齊！</span>
                                </div>
                              </li>
                              <li className="grid grid-cols-[auto_1fr] gap-x-2 border-b border-amber-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <span className="w-5 text-center mt-[1px]">☕️</span> 
                                <div className="flex flex-col gap-0.5">
                                   <span className="font-black text-amber-500">放空時光</span>
                                   <span className="font-bold text-amber-700 leading-relaxed break-words">找間有海景或質感的咖啡廳坐坐，回味這幾天的美好。</span>
                                </div>
                              </li>
                           </ul>
                        </div>
                      )}

                      {item.hasExtraNote === 'shuttle_info' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-yellow-50 rounded-[1rem] md:rounded-2xl border-2 border-yellow-100 relative overflow-hidden shadow-sm">
                           <h5 className="font-black text-yellow-600 mb-3 flex items-center text-sm"><Bus className="w-4 h-4 mr-1 flex-shrink-0" /> 機場接駁車時刻表 🚌</h5>
                           <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs mb-3">
                              {['07:20', '07:40', '08:00', '08:20'].map(t => (
                                <div key={t} className="bg-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border-2 border-yellow-200 text-yellow-600 font-bold shadow-sm">{t}</div>
                              ))}
                           </div>
                           <p className="text-[9px] sm:text-[10px] text-yellow-700 font-bold bg-white/50 p-2 rounded-lg leading-relaxed break-words">※ 建議提前 5-10 分鐘至接駁站牌候車，以免耽誤登機時間。</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Day 7 專屬甜蜜結尾 */}
              {day.id === 'day7' && (
                <div className="mt-12 sm:mt-16 py-8 sm:py-12 px-4 sm:px-6 flex flex-col items-center animate-in fade-in duration-1000 bg-gradient-to-b from-orange-50 to-yellow-50 rounded-[1.5rem] md:rounded-[2.5rem] border-[3px] md:border-4 border-dashed border-orange-200 relative overflow-hidden shadow-sm">
                  <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 text-5xl sm:text-6xl opacity-30 rotate-12">✈️</div>
                  <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 text-5xl sm:text-6xl opacity-30 -rotate-12">🛍️</div>
                  <div className="relative mb-4 sm:mb-6">
                    <div className="text-5xl sm:text-6xl animate-bounce">🍊</div>
                    <div className="absolute -top-3 sm:-top-4 -right-4 sm:-right-6 text-2xl sm:text-3xl animate-pulse">✨</div>
                    <div className="absolute -bottom-1 sm:-bottom-2 -left-3 sm:-left-4 text-2xl sm:text-3xl">💖</div>
                  </div>
                  <div className="text-center space-y-3 sm:space-y-4 relative z-10">
                     <p className="text-xl sm:text-2xl font-black text-[#FF9800] tracking-widest drop-shadow-sm">旅途愉快！滿載而歸</p>
                     <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-orange-300 mx-auto rounded-full"></div>
                     <p className="text-base sm:text-lg md:text-xl font-bold text-amber-500 italic px-2 sm:px-4 break-words">"Our sweetest journey continues, forever and always..."</p>
                     <div className="mt-6 sm:mt-8 pt-4 sm:pt-6">
                       <p className="text-xs sm:text-sm font-black text-white bg-[#FF9800] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full inline-flex items-center gap-1.5 sm:gap-2 shadow-md hover:scale-105 transition-transform break-words">
                          <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" /> Made with Love by HYH & RJ <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white flex-shrink-0" />
                       </p>
                     </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </main>
      </div>

      <style>{`
        /* 匯入日韓系可愛圓潤字體 */
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800;900&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,600&display=swap');
        .cute-font { font-family: 'Nunito', 'M PLUS Rounded 1c', sans-serif; letter-spacing: 0.02em; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(-5%); } 50% { transform: translateY(5%); } }
        .animate-bounce-slow { animation: bounce-slow 3s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default App;

import React from "react";
import { motion } from "motion/react";
import { Music, Star, Wind, Heart, Anchor, ShieldCheck, Target, Coffee } from "lucide-react";

interface LyricSection {
  type: "verse" | "chorus" | "bridge" | "instrumental";
  text: string[];
  icon?: React.ReactNode;
}

const LYRICS: LyricSection[] = [
  {
    type: "verse",
    icon: <Wind className="w-5 h-5" />,
    text: [
      "Мой самолёт вошёл в пике –",
      "Крутые сделав виражи,",
      "Чем больше звёзд на коньяке –",
      "Внизу тем ближе миражи."
    ]
  },
  {
    type: "bridge",
    text: [
      "Ты если был романтиком –",
      "В глазах людей стал фантиком,",
      "Для них всё чёрно – белое,",
      "Им дай скандалы… - И так далее."
    ]
  },
  {
    type: "verse",
    icon: <Coffee className="w-5 h-5" />,
    text: [
      "И я не смею в чём-то лгать,",
      "По мне-так вовсе смысла нет,",
      "Но мне интим не предлагать –",
      "Я так воспитан с малых лет."
    ]
  },
  {
    type: "bridge",
    text: [
      "Пусть я вам нравлюсь, но, увы,",
      "Я не отдамся без любви,",
      "Я в этом непоколебим",
      "И принципиален… - И так далее."
    ]
  },
  {
    type: "chorus",
    icon: <Heart className="w-5 h-5" />,
    text: [
      "Припев:",
      "А люди слишком много ценят фантик,",
      "Съедят конфетку, ну, а фантик мнут,",
      "И если вы в душе ещё романтик,",
      "То люди вас, конечно не поймут."
    ]
  },
  {
    type: "verse",
    icon: <Star className="w-5 h-5" />,
    text: [
      "Могу носить вас на руках,",
      "Но вы сказали: - Нет, не сметь!",
      "Но вот, ходить на каблуках –",
      "Эт тоже надо бы уметь."
    ]
  },
  {
    type: "bridge",
    text: [
      "Чтоб был прямым всегда ваш путь,",
      "Потренируйтесь хоть чуть-чуть,",
      "Ну, чтобы криво не ходить,",
      "Чтоб не упали… - И так далее."
    ]
  },
  {
    type: "verse",
    icon: <Star className="w-5 h-5 text-gold" />,
    text: [
      "Она при выборе меня",
      "Ушла от норм от дедовских,",
      "Считала лайки все три дня",
      "Просмотров интернетовских.",
      "Потом решила: подхожу!",
      "А я теперь с ума схожу,",
      "Она забыла про любовь,",
      "Про все детали… - И так далее."
    ]
  },
  {
    type: "chorus",
    text: [
      "Припев:",
      "А люди слишком много ценят фантик,",
      "Съедят конфетку, ну, а фантик мнут,",
      "И если вы в душе ещё романтик,",
      "То люди вас, конечно не поймут."
    ]
  },
  {
    type: "verse",
    icon: <ShieldCheck className="w-5 h-5" />,
    text: [
      "Мне вновь на истребителе",
      "Пробить путь к чести хочется,",
      "Но люди – потребители",
      "Своё создали общество,",
      "Где всем плевать на личности,",
      "Царит культ неприличности,",
      "Где чем тупее – тем смешней",
      "И тем скандальней… - И так далее."
    ]
  },
  {
    type: "verse",
    icon: <Target className="w-5 h-5" />,
    text: [
      "И так, внимание, экипаж,",
      "Прицел – приличной дальности,",
      "В чём самый главный принцип ваш?",
      "В отсутствии принципиальности.",
      "Ну вот, отлично вижу цель,",
      "Осталось навести прицел,",
      "Надеюсь, в яблочко попасть,",
      "Жму на педали… - И так далее."
    ]
  },
  {
    type: "chorus",
    text: [
      "Припев:",
      "А люди слишком много ценят фантик,",
      "Съедят конфетку, ну, а фантик мнут,",
      "И если вы в душе ещё романтик,",
      "То люди вас, конечно не поймут."
    ]
  },
  {
    type: "instrumental",
    icon: <Music className="w-5 h-5" />,
    text: ["(мелодия в исполнении саксофона)"]
  },
  {
    type: "verse",
    icon: <Target className="w-5 h-5" />,
    text: [
      "Упрямство есть крутая вещь,",
      "И в этом нет сомнения,",
      "Ну что же тут поделаешь?",
      "У вас своё есть мнение.",
      "Не любите романтику,",
      "Ваш выбор – лишь по фантику,",
      "Ну, оставайтесь при своём,",
      "Уже достали… - И так далее."
    ]
  },
  {
    type: "verse",
    icon: <Anchor className="w-5 h-5" />,
    text: [
      "Тебе казалось ты не спал,",
      "Но обнаруживаешь вдруг,",
      "Как не заметил и попал",
      "Ты в заколдованный тот круг.",
      "И если круг ты разорвал,",
      "Чтоб не упасть – держи штурвал,",
      "Здесь все те, кто тебя поймут,",
      "Они нас ждали… - И так далее."
    ]
  },
  {
    type: "chorus",
    icon: <Heart className="w-5 h-5" />,
    text: [
      "Припев:",
      "А люди слишком много ценят фантик,",
      "Но я их мнений вовсе не боюсь,",
      "И пусть для них я конченый романтик,",
      "Каким я был – таким и остаюсь!"
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen art-deco-bg selection:bg-gold selection:text-charcoal pb-20">
      {/* Decorative Header */}
      <header className="pt-16 pb-12 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-4">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 border-2 border-gold rotate-45 flex items-center justify-center"
          >
            <Music className="-rotate-45 text-gold w-8 h-8" />
          </motion.div>
        </div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-display text-4xl md:text-6xl text-gold tracking-[0.2em] mb-2 uppercase"
        >
          Романтик
        </motion.h1>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          className="h-1 bg-gold mb-4"
        />
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="font-serif italic text-gold-light text-lg"
        >
          Лирика в стиле 1920-х
        </motion.p>
      </header>

      {/* Lyrics Body */}
      <main className="max-w-3xl mx-auto px-6 space-y-16">
        {LYRICS.map((section, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative ${section.type === 'chorus' ? 'pl-8' : ''}`}
          >
            {/* Section Decorator */}
            <div className="absolute -left-12 top-0 hidden md:flex items-center justify-center opacity-30 text-gold h-full">
              {section.icon}
            </div>

            <div className={`
              ${section.type === 'chorus' ? 'gold-border p-8 bg-charcoal/80' : ''}
              ${section.type === 'bridge' ? 'pl-8 border-l-2 border-gold/30 italic opacity-80' : ''}
              ${section.type === 'instrumental' ? 'text-center border-y border-gold/20 py-4 opacity-50 font-serif' : ''}
            `}>
              {section.text.map((line, lIdx) => (
                <motion.p
                  key={lIdx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: lIdx * 0.1 }}
                  className={`
                    mb-2 text-lg md:text-xl font-serif tracking-wide
                    ${line.startsWith('Припев:') ? 'font-display text-gold uppercase text-sm mb-4 tracking-[0.3em]' : ''}
                    ${section.type === 'chorus' ? 'text-gold-light text-2xl font-bold italic' : 'text-gray-300'}
                  `}
                >
                  {line.startsWith('Припев:') ? line.replace('Припев:', '') : line}
                </motion.p>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Closing Decorator */}
        <div className="pt-12 flex justify-center">
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse delay-75" />
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse delay-150" />
          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="mt-20 py-8 text-center px-4 border-t border-gold/10">
        <p className="font-display text-[10px] text-gold/40 tracking-[0.5em] uppercase">
          Elegant Music Series • MCMXX / MMXXVI
        </p>
      </footer>
    </div>
  );
}

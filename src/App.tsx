import React, { useState } from "react";

const App = () => {
  const [likes, setLikes] = useState(0);
  const [hearts, setHearts] = useState(0);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-pink-600">我们的情侣主页</h1>

      <div className="flex flex-col sm:flex-row items-center gap-8 bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        {/* 左边人物 */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/150?u=person1"
            alt="他"
            className="rounded-full w-32 h-32 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">他</h2>
        </div>

        {/* 甜蜜分隔线 */}
        <div className="flex flex-col items-center text-pink-400 text-2xl select-none">
          <span>❤️</span>
          <span>❤️</span>
          <span>❤️</span>
        </div>

        {/* 右边人物 */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/150?u=person2"
            alt="她"
            className="rounded-full w-32 h-32 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">她</h2>
        </div>
      </div>

      {/* 甜蜜留言 */}
      <p className="mt-8 max-w-md text-center text-pink-700 italic">
        “相遇是美丽的开始，携手走过每个春夏秋冬。”
      </p>

      {/* 互动按钮 */}
      <div className="flex gap-6 mt-8">
        <button
          className="bg-pink-500 text-white rounded px-6 py-2 hover:bg-pink-600 transition"
          onClick={() => setLikes((v) => v + 1)}
        >
          点赞 {likes}
        </button>
        <button
          className="bg-red-500 text-white rounded px-6 py-2 hover:bg-red-600 transition"
          onClick={() => setHearts((v) => v + 1)}
        >
          送心 ❤️ {hearts}
        </button>
      </div>
    </div>
  );
};

export default App;

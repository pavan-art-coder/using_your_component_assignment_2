import React, { useState } from "react";

const LikeButton = () => {
  // Step 1: Create a state variable to track the like status
  const [liked, setLiked] = useState(false);

  // Step 2: Function to toggle the like state
  const handleLike = () => {
    setLiked(!liked); // Toggles true/false
  };

  // Step 3: Return the button with dynamic styles and text
  return (
    <button
      onClick={handleLike} // Step 4: Attach click event to toggle state
      className={`px-4 py-2 rounded-lg transition-all ${
        liked ? "bg-red-500 text-white" : "bg-gray-300 text-black"
      }`}
    >
      {liked ? "❤️ Liked" : "🤍 Like"} {/* Step 5: Dynamic text based on state */}
    </button>
  );
};

export default LikeButton;



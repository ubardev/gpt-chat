"use client";

export default function ChatComponent() {
  return (
    <div>
      {/* Text messages */}
      <div>
        <h3 className="text-lg font-semibold mt-2">GPT-4</h3>
        <p>I am a robot with GPT-4</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mt-2">User</h3>
        <p>I am a user</p>
      </div>

      <form className="mt-12">
        <p>User Message</p>
        <textarea
          className="mt-2 w-full bg-slate-600 p2"
          placeholder="What are data structures and algorithims?"
        />
        <button className="rounded-md bg-blue-600 p-2 mt-2">
          Send message
        </button>
      </form>
    </div>
  );
}

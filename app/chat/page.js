"use client";

import Link from "next/link";

import { Box, Button, Stack, TextField } from "@mui/material";
import { useState, useRef, useEffect } from "react";

const Chatbox = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I am Eddie. How are you feeling today?",
    },
  ]);

  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return; // Don't send empty messages
    setIsLoading(true);

    setMessage("");
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([...messages, { role: "user", content: message }]),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value || new Uint8Array(), {
          stream: true,
        });
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ];
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((messages) => [
        ...messages,
        {
          role: "assistant",
          content:
            "I'm sorry, but I encountered an error. Please try again later.",
        },
      ]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (event) => {
    // Check if the pressed key is the Enter key and the shift key is not pressed down at the same time
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  //   const scrollToBottom = () => {
  //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  //   };

  //   useEffect(() => {
  //     scrollToBottom();
  //   }, [messages]);

  const scrollToBottom = () => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatMessage = (message) => {
    // Replace newline characters with line breaks
    return message
      .replace(/[\r\n]/g, " ")
      .replace(/(^")|("$)/g, "")
      .trim();
  };

  return (
    <Box
      width="80%"
      //   marginTop={"20px"}
      maxWidth="600px"
      height="60vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={2} // Add padding to avoid text sticking to edges
    >
      <Stack
        direction={"column"}
        width="auto"
        height="500px"
        border="1px solid black"
        p={2}
        spacing={3}
      >
        <Stack
          direction={"column"}
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
          ref={chatContainerRef}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                message.role === "assistant" ? "flex-start" : "flex-end"
              }
            >
              <Box
                bgcolor={
                  message.role === "assistant" ? "#058743" : "secondary.main"
                }
                color="white"
                borderRadius={16}
                p={3}
              >
                {formatMessage(message.content)}
              </Box>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <TextField
            label="Message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            // onPress={handleKeyPress}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleKeyPress(e);
              }
            }}
            disabled={isLoading}
          />
          <Button
            variant="contained"
            onClick={sendMessage}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  return (
    <header className="absolute top-0 inset-x-0 z-50 h-24 flex items-center">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-full items-center">
        <nav className="flex justify-between items-center h-full">
          <div className="flex min-w-max items-center">
            <Link
              href="/"
              className="flex items-center gap-x-4 text-2xl font-semibold text-gray-700 dark:text-gray-300"
            >
              <div className="flex items-center -space-x-3 font-semibold">
                <span className="h-6 aspect-square bg-emerald-600 dark:bg-emerald-400 rounded-full flex" />
                <span className="h-6 aspect-square bg-gray-600 dark:bg-white rounded-full flex" />
              </div>
              Eddie
            </Link>
          </div>
          <div
            className={`
          flex flex-col space-y-10 inset-0 fixed top-0  h-[100dvh] bg-white dark:bg-gray-950 lg:!bg-transparent py-20 px-5 sm:px-10 md:px-14
          transition-all ease-linear duration-300 lg:flex-row lg:flex-1 lg:py-0 lg:px-0 lg:space-y-0 lg:gap-x-10 lg:relative lg:top-0 lg:h-full lg:items-center lg:justify-between lg:w-max
          ${
            openNavbar
              ? "visible opacity-100 translate-y-0"
              : "-translate-y-9 opacity-0 invisible lg:translate-y-0 lg:visible lg:opacity-100"
          }
        `}
          >
            <ul className="flex flex-col gap-y-5 text-gray-700 dark:text-gray-300 lg:items-center lg:flex-row lg:gap-x-5 lg:h-full lg:justify-center lg:flex-1">
              <li>
                <Link
                  href="/"
                  className="transition ease-linear hover:text-gray-900 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition ease-linear hover:text-gray-900 dark:hover:text-white"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition ease-linear hover:text-gray-900 dark:hover:text-white"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition ease-linear hover:text-gray-900 dark:hover:text-white"
                >
                  About Google AI Hackathon
                </Link>
              </li>
            </ul>
            <div className="w-full flex sm:w-max lg:min-w-max lg:items-center">
              <Link
                href="#"
                className="flex justify-center gap-x-3 items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
                  border-b bg-gray-700 dark:border-blue-300 hover:border-b-gray-900 dark:hover:border-b-white bg-transparent"
              >
                Stay in touch!
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end relative z-60 lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              className="p-3 rounded-full bg-emerald-600 dark:bg-emerald-500 outline-none w-12 aspect-square flex flex-col relative justify-center items-center"
            >
              <span className="sr-only">toggle navbar</span>
              <span
                className={`
              w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear
              ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}
            `}
              />
              <span
                className={`
              w-6 origin-center  mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
              ${openNavbar ? "scale-x-0 opacity-0" : ""}
            `}
              />
              <span
                className={`
              w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
              ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""}
            `}
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 dark:bg-gray-900 py-32 sm:py-36 lg:py-40 overflow-hidden h-[100dvh] min-h-max flex items-center relative">
        <div
          className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70
  backdrop-filter blur-3xl opacity-50"
        />
        <div
          className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70
  backdrop-filter blur-3xl opacity-50"
        />
        <div
          className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-emerald-400/5 right-0
  -translate-y-[40%] translate-x-[40%] top-0"
        >
          <div className="inset-[10%] rounded-full bg-gradient-to-l from-emerald-400/20">
            <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-emerald-400/30" />
          </div>
        </div>
        <div
          className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-emerald-400/5 left-0
  translate-y-[40%] -translate-x-[40%] bottom-0"
        >
          <div className="inset-[10%] rounded-full bg-gradient-to-r from-emerald-400/40">
            <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-emerald-400/50" />
          </div>
        </div>
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center flex flex-col items-center">
            <Chatbox />
          </div>
        </div>
      </section>
    </>
  );
}

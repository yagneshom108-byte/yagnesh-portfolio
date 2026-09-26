"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Copy, Check, Send, Mail, Loader2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const email = SITE_CONFIG.email;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSending(true);
    setIsSuccess(false);
    setErrorMessage("");

    try {
      await emailjs.send(
        "service_13t3wp6",
        "template_bzpbn7l",
        {
          name: formData.name,
          email: formData.email,

          // EmailJS Contact Us template generally uses "title"
          title: formData.projectType || "Portfolio Inquiry",

          // Keep the actual project type + brief together
          message: `
Project Type:
${formData.projectType || "Not specified"}

Project Brief:
${formData.message}
          `.trim(),

          time: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        {
          publicKey: "TdAdG3-oCQuqMp8jq",
        }
      );

      setIsSuccess(true);

      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setErrorMessage(
        "Something went wrong. Please try again or email me directly."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        py-24
        md:py-32
        px-4
        sm:px-6
        md:px-8
        bg-canvas
        border-t
        border-border
        overflow-hidden
        scroll-mt-24
      "
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-8
            mb-16
            pb-6
            border-b
            border-border
          "
        >
          <div>
            <div
              className="
                flex
                items-center
                gap-2
                mb-3
                font-mono
                text-[10px]
                sm:text-xs
                text-accent
                uppercase
                tracking-[0.18em]
                font-semibold
              "
            >
              <Mail className="w-3.5 h-3.5" />
              <span>[ 10 • LET'S WORK TOGETHER ]</span>
            </div>

            <h2
              className="
                text-display
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                text-ink
                tracking-tight
                leading-[0.88]
                uppercase
              "
            >
              CONTACT
            </h2>
          </div>

          <p
            className="
              max-w-md
              font-mono
              text-[10px]
              sm:text-xs
              text-ink-muted
              uppercase
              tracking-[0.1em]
              leading-relaxed
              md:text-right
            "
          >
            HAVE A PROJECT IN MIND?
            <br />
            LET'S TURN YOUR IDEA INTO SOMETHING
            <br />
            PEOPLE REMEMBER.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            <div className="space-y-10">
              <div>
                <span
                  className="
                    block
                    font-mono
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-ink-muted
                    mb-3
                  "
                >
                  DIRECT EMAIL
                </span>

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    gap-3
                  "
                >
                  <a
                    href={`mailto:${email}`}
                    className="
                      text-xl
                      sm:text-2xl
                      font-semibold
                      text-ink
                      hover:text-accent
                      transition-colors
                      break-all
                    "
                  >
                    {email}
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="
                      shrink-0
                      w-10
                      h-10
                      rounded-full
                      border
                      border-border
                      bg-surface
                      flex
                      items-center
                      justify-center
                      text-ink-muted
                      hover:text-accent
                      hover:border-accent
                      transition-all
                    "
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {copied && (
                  <p
                    className="
                      mt-2
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-widest
                      text-accent
                    "
                  >
                    Email copied
                  </p>
                )}
              </div>

              <div>
                <span
                  className="
                    block
                    font-mono
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-ink-muted
                    mb-3
                  "
                >
                  AVAILABILITY
                </span>

                <p
                  className="
                    text-lg
                    sm:text-xl
                    text-ink
                    font-semibold
                  "
                >
                  Open for select projects
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    sm:text-[15px]
                    text-ink-secondary
                    leading-relaxed
                    max-w-md
                  "
                >
                  Documentary editing, brand storytelling, motion graphics,
                  YouTube content and social media campaigns.
                </p>
              </div>

              <div>
                <span
                  className="
                    block
                    font-mono
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-ink-muted
                    mb-4
                  "
                >
                  WHAT I CAN HELP WITH
                </span>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Video Editing",
                    "Motion Graphics",
                    "Documentary",
                    "Brand Films",
                    "YouTube",
                    "Social Media",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        px-3
                        py-2
                        rounded-full
                        border
                        border-border
                        bg-surface
                        font-mono
                        text-[9px]
                        sm:text-[10px]
                        uppercase
                        tracking-wider
                        text-ink-secondary
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-7"
            >
              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="
                      block
                      font-mono
                      text-[9px]
                      sm:text-[10px]
                      uppercase
                      tracking-[0.14em]
                      text-ink-muted
                      mb-2
                    "
                  >
                    NAME <span className="text-accent">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="
                      w-full
                      h-14
                      px-4
                      rounded-xl
                      border
                      border-border
                      bg-surface
                      text-ink
                      placeholder:text-ink-muted
                      outline-none
                      focus:border-accent
                      transition-colors
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="
                      block
                      font-mono
                      text-[9px]
                      sm:text-[10px]
                      uppercase
                      tracking-[0.14em]
                      text-ink-muted
                      mb-2
                    "
                  >
                    EMAIL <span className="text-accent">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="
                      w-full
                      h-14
                      px-4
                      rounded-xl
                      border
                      border-border
                      bg-surface
                      text-ink
                      placeholder:text-ink-muted
                      outline-none
                      focus:border-accent
                      transition-colors
                    "
                  />
                </div>
              </div>

              {/* PROJECT TYPE */}
              <div>
                <label
                  htmlFor="projectType"
                  className="
                    block
                    font-mono
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.14em]
                    text-ink-muted
                    mb-2
                  "
                >
                  PROJECT SCOPE <span className="text-accent">*</span>
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="
                    w-full
                    h-14
                    px-4
                    rounded-xl
                    border
                    border-border
                    bg-surface
                    text-ink
                    outline-none
                    focus:border-accent
                    transition-colors
                  "
                >
                  <option value="" disabled>
                    Select what you need
                  </option>

                  <option value="Video Editing">
                    Video Editing
                  </option>

                  <option value="Motion Graphics">
                    Motion Graphics
                  </option>

                  <option value="Documentary Editing">
                    Documentary Editing
                  </option>

                  <option value="Brand Film / Commercial">
                    Brand Film / Commercial
                  </option>

                  <option value="YouTube Editing">
                    YouTube Editing
                  </option>

                  <option value="Social Media Content">
                    Social Media Content
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="
                    block
                    font-mono
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.14em]
                    text-ink-muted
                    mb-2
                  "
                >
                  PROJECT BRIEF <span className="text-accent">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the project, vision, deliverables, and timeline..."
                  className="
                    w-full
                    px-4
                    py-4
                    rounded-xl
                    border
                    border-border
                    bg-surface
                    text-ink
                    placeholder:text-ink-muted
                    outline-none
                    focus:border-accent
                    transition-colors
                    resize-none
                    leading-relaxed
                  "
                />
              </div>

              {/* SUCCESS */}
              {isSuccess && (
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-xl
                    border
                    border-accent/30
                    bg-accent/10
                    text-accent
                  "
                >
                  <Check className="w-5 h-5 shrink-0" />

                  <div>
                    <p
                      className="
                        font-semibold
                        text-sm
                      "
                    >
                      Inquiry Dispatched!
                    </p>

                    <p
                      className="
                        mt-1
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-wider
                        opacity-80
                      "
                    >
                      Your message has been sent successfully.
                    </p>
                  </div>
                </div>
              )}

              {/* ERROR */}
              {errorMessage && (
                <div
                  className="
                    p-4
                    rounded-xl
                    border
                    border-red-500/30
                    bg-red-500/10
                    text-red-500
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-wider
                    leading-relaxed
                  "
                >
                  {errorMessage}
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSending}
                className="
                  group
                  w-full
                  h-14
                  rounded-xl
                  bg-accent
                  text-black
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-xs
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  duration-300
                  hover:brightness-110
                  hover:-translate-y-0.5
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                  disabled:hover:translate-y-0
                "
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send
                      className="
                        w-4
                        h-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </>
                )}
              </button>

              <p
                className="
                  font-mono
                  text-[8px]
                  sm:text-[9px]
                  text-ink-muted
                  uppercase
                  tracking-[0.08em]
                  leading-relaxed
                "
              >
                By submitting this form, your inquiry will be sent directly
                to my email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  categories,
  channelNav,
  exploreNav,
  mainNav,
  shorts,
  videos,
  type Category,
} from "@/lib/catalog";

export function HomeFeed() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const visibleVideos = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return videos.filter((video) => {
      const matchesCategory = category === "All" || video.tags.includes(category);
      const matchesQuery =
        needle.length === 0 ||
        video.title.toLowerCase().includes(needle) ||
        video.channel.toLowerCase().includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="min-h-screen bg-white text-[#0f0f0f]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div className="hidden items-center px-6 pt-5 lg:flex">
          <Logo />
        </div>

        <header className="sticky top-0 z-20 flex items-center gap-3 bg-white px-4 py-4 sm:px-6 lg:static">
          <Logo compact className="lg:hidden" />
          <form
            className="relative mx-auto w-full max-w-[560px] flex-1"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="search" className="sr-only">
              Search for cats, videos, or channels
            </label>
            <input
              id="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for cats, videos, or channels..."
              className="h-10 w-full rounded-full bg-[#f2f2f2] pr-11 pl-4 text-sm outline-none placeholder:text-[#909090] focus:bg-[#eaeaea]"
            />
            <SearchIcon className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-[#0f0f0f]" />
          </form>
          <button
            type="button"
            aria-label="Notifications"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full hover:bg-[#f2f2f2]"
          >
            <BellIcon />
          </button>
        </header>

        <aside className="hidden px-3 pt-2 pb-8 lg:block">
          <nav aria-label="Primary" className="space-y-0.5">
            {mainNav.map((item) => (
              <SideLink key={item} label={item} active={item === "Home"} />
            ))}
          </nav>

          <div className="mt-4">
            <div className="flex items-center justify-between rounded-lg px-3 py-1.5 text-sm text-[#0f0f0f]">
              <span>Explore</span>
              <span aria-hidden className="text-lg leading-none tracking-widest text-[#606060]">
                ···
              </span>
            </div>
            {exploreNav.map((item) => (
              <SideLink key={item.label} label={item.label} dot={item.dot} />
            ))}
          </div>

          <div className="mt-3">
            {channelNav.map((item) => (
              <SideLink
                key={item.label}
                label={item.label}
                dot={item.dot}
                flower={item.flower}
              />
            ))}
          </div>
        </aside>

        <main className="min-w-0 px-4 pb-10 sm:px-6">
          <div className="flex gap-3 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((item) => {
              const selected = item === category;
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setCategory(item)}
                  className={`h-8 shrink-0 rounded-full px-3 text-sm ${
                    selected
                      ? "bg-[#0f0f0f] font-medium text-white"
                      : "bg-[#f2f2f2] text-[#0f0f0f] hover:bg-[#e5e5e5]"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {visibleVideos.length === 0 ? (
            <p className="py-16 text-center text-sm text-[#606060]">
              No videos match that search.
            </p>
          ) : (
            <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
              {visibleVideos.map((video) => (
                <li key={video.id}>
                  <article>
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-[#e5e5e5]">
                      <Image
                        src={video.thumbnail}
                        alt=""
                        fill
                        sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover"
                      />
                      {video.overlay === "deep-sleep" ? (
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/25">
                          <p className="absolute top-3 left-3 text-[15px] font-extrabold tracking-wide text-white drop-shadow">
                            DEEP SLEEP
                          </p>
                          <p className="absolute top-2 right-3 text-xl font-bold tracking-widest text-white/90">
                            z z z
                          </p>
                        </div>
                      ) : null}
                      <span className="absolute right-2 bottom-2 rounded-md bg-black/80 px-1.5 py-0.5 text-[12px] font-medium text-white">
                        {video.duration}
                      </span>
                    </div>
                    <div className="mt-3 flex gap-3">
                      <Image
                        src={video.avatar}
                        alt=""
                        width={36}
                        height={36}
                        className="h-9 w-9 shrink-0 rounded-full object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start gap-1">
                          <h2 className="line-clamp-2 flex-1 text-[14px] leading-5 font-semibold">
                            {video.title}
                          </h2>
                          <button
                            type="button"
                            aria-label={`More actions for ${video.title}`}
                            className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-[#0f0f0f] hover:bg-[#f2f2f2]"
                          >
                            <MoreIcon />
                          </button>
                        </div>
                        <p className="mt-1 text-[12px] text-[#606060]">{video.channel}</p>
                        <p className="text-[12px] text-[#606060]">
                          {video.views} • {video.age}
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}

          <section className="mt-8" aria-label="Cat Shorts">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-[20px] font-bold">
                <ShortsIcon />
                Cat Shorts
              </h2>
              <button type="button" className="text-sm font-medium text-[#0f0f0f] hover:underline">
                See all
              </button>
            </div>
            <ul className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {shorts.map((short) => (
                <li key={short.id} className="w-[136px] shrink-0">
                  <article className="relative aspect-[9/16] overflow-hidden rounded-xl bg-[#e5e5e5]">
                    <Image
                      src={short.thumbnail}
                      alt={short.alt}
                      fill
                      sizes="136px"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent px-2 pt-8 pb-2">
                      <p className="text-[12px] font-medium text-white">{short.views}</p>
                      <button
                        type="button"
                        aria-label={`More actions for short, ${short.views}`}
                        className="grid h-6 w-6 place-items-center text-white"
                      >
                        <MoreIcon />
                      </button>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

function SideLink({
  label,
  active = false,
  dot = false,
  flower = false,
}: {
  label: string;
  active?: boolean;
  dot?: boolean;
  flower?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-sm ${
        active ? "bg-[#FDE8F0] font-medium" : "text-[#0f0f0f]"
      }`}
    >
      <span>{label}</span>
      {dot || flower ? (
        <span className="flex items-center gap-1.5">
          {dot ? <span className="h-1.5 w-1.5 rounded-full bg-[#e53935]" /> : null}
          {flower ? <FlowerIcon /> : null}
        </span>
      ) : null}
    </div>
  );
}

function Logo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <CatMark />
      <span
        className={`text-[22px] leading-none font-bold tracking-tight ${compact ? "hidden sm:inline" : ""}`}
      >
        MeowTube
      </span>
    </div>
  );
}

function CatMark() {
  return (
    <svg viewBox="0 0 36 36" className="h-8 w-8" aria-hidden="true">
      <path fill="#FF5C7C" d="M9 15 4 5l10 8zM27 15l5-10-10 8z" />
      <circle cx="18" cy="20" r="11" fill="#FF5C7C" />
      <circle cx="14" cy="19" r="1.3" fill="#fff" />
      <circle cx="22" cy="19" r="1.3" fill="#fff" />
      <path
        d="M16.2 23.2c.6.8 1.2 1.2 1.8 1.2s1.2-.4 1.8-1.2"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="2" />
      <path d="M16 16.5 20 20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M6.2 9.5a5.8 5.8 0 0 1 11.6 0c0 4.2 1.2 5.6 1.2 5.6H5s1.2-1.4 1.2-5.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M10 18.2a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="6" r="1.4" />
      <circle cx="12" cy="12" r="1.4" />
      <circle cx="12" cy="18" r="1.4" />
    </svg>
  );
}

function ShortsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="4" fill="#FF2D3A" />
      <path d="M10.2 8.2v7.6L16.2 12z" fill="#fff" />
    </svg>
  );
}

function FlowerIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
      <circle cx="8" cy="4.2" r="2" fill="#FF7AA8" />
      <circle cx="11.6" cy="7" r="2" fill="#FF7AA8" />
      <circle cx="10.2" cy="11" r="2" fill="#FF7AA8" />
      <circle cx="5.8" cy="11" r="2" fill="#FF7AA8" />
      <circle cx="4.4" cy="7" r="2" fill="#FF7AA8" />
      <circle cx="8" cy="8" r="1.3" fill="#FFD1E3" />
    </svg>
  );
}

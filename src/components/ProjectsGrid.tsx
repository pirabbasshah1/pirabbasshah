"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";

type ModalState = { open: boolean; project?: Project };

export default function ProjectsGrid() {
  const [modal, setModal] = useState<ModalState>({ open: false });

  const openVideo = (project: Project) => setModal({ open: true, project });
  const close = () => setModal({ open: false });

  return (
    <>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group relative overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900 min-h-64 shadow-sm"
          >
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${p.image})` }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-black/70 transition-colors duration-300 group-hover:bg-black/35" aria-hidden />
            <div className="relative z-10 p-5 text-white">
              <h3 className="font-semibold tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">{p.title}</h3>
              <p className="mt-1 text-xs text-white/85 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">{p.tech.join(", ")}</p>
              <ul className="mt-3 text-sm text-white/90 list-disc pl-5 space-y-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                {p.summary.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
              {p.youtube && (
                <div className="mt-4">
                  <button
                    onClick={() => openVideo(p)}
                    className="inline-flex items-center rounded-md bg-white/90 text-black px-3 py-1.5 text-sm font-medium hover:bg-white"
                  >
                    Watch demo
                  </button>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {modal.open && modal.project?.youtube && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div className="w-full max-w-3xl aspect-video bg-black" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="w-full h-full"
              src={`${modal.project.youtube}?autoplay=1&rel=0`}
              title={`${modal.project.title} demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}




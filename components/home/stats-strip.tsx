"use client"

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  { value: 500, prefix: '', suffix: '+', label: 'Trades websites built' },
  { value: 98, prefix: '', suffix: '%', label: 'Customer satisfaction' },
  { value: 2400, prefix: '£', suffix: '', label: 'Avg. added annual revenue' },
  { value: 3, prefix: '', suffix: ' Weeks', label: 'Typical site live time' },
]

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>('[data-counter]')
      
      counters.forEach((el) => {
        const target = parseFloat(el.dataset.counter || '0')
        const prefix = el.dataset.prefix || ''
        const suffix = el.dataset.suffix || ''
        
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            const formatted = target >= 1000 
              ? Math.round(obj.val).toLocaleString()
              : Math.round(obj.val).toString()
            el.textContent = `${prefix}${formatted}${suffix}`
          },
        })
      })
    }, ref)
    
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-amber py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div
              data-counter={stat.value}
              data-prefix={stat.prefix}
              data-suffix={stat.suffix}
              className="font-mono font-bold text-4xl md:text-6xl text-forge-black tracking-tight"
            >
              {stat.prefix}0{stat.suffix}
            </div>
            <div className="mt-3 text-forge-black/70 text-sm md:text-base font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

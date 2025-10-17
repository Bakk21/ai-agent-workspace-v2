"use client"

import type * as React from "react"
import type { ChartTooltipProps, TooltipProps } from "recharts"
import { cn } from "@/lib/utils"

interface ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

export function ChartContainer({ config, className, children, ...props }: ChartContainerProps) {
  const configKeys = Object.keys(config)
  const configValues = Object.values(config)

  return (
    <div
      className={cn("chart-container", className)}
      style={
        {
          "--chart-count": configKeys.length,
          ...configValues.reduce(
            (acc, { color }, index) => {
              acc[`--color-${configKeys[index]}`] = color
              return acc
            },
            {} as Record<string, string>,
          ),
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  )
}

export function ChartTooltipContent({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <span className="text-[0.70rem] uppercase text-muted-foreground">{label}</span>
        </div>
        <div className="flex flex-col gap-1">
          {payload.map((data, i) => (
            <div key={i} className="flex items-center justify-between gap-2 text-[0.70rem]">
              <span
                className="flex items-center gap-1 capitalize"
                style={{
                  color: data.color,
                }}
              >
                {data.name}
              </span>
              <span className="tabular-nums">{data.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ChartTooltip(props: ChartTooltipProps<number, string>) {
  return <ChartTooltipContent {...props} />
}


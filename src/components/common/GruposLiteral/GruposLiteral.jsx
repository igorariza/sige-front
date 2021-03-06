import * as React from "react"

function GruposLiteral(props) {
  return (
    <svg
      width={324.895}
      height={122.021}
      viewBox="87.552 13.989 324.895 122.021"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter id="prefix__editing-extrude-glow">
          <feFlood floodColor="#4fff15" result="flood-1" />
          <feMorphology radius={1} in="SourceAlpha" result="erode" />
          <feComposite operator="in" in="flood-1" in2="erode" result="comp1" />
          <feConvolveMatrix
            order="3,3"
            divisor={1}
            in="comp1"
            result="convolve"
            kernelMatrix="0 0 0 1 1 1 0 0 0"
          />
          <feOffset dx={-3} in="convolve" result="extrude" />
          <feComposite
            operator="in"
            in="flood-1"
            in2="extrude"
            result="comp-extrude"
          />
          <feFlood floodColor="#000" result="flood-2" />
          <feComposite
            operator="in"
            in="flood-2"
            in2="SourceAlpha"
            result="comp2"
          />
          <feMorphology
            operator="dilate"
            radius={1}
            in="comp2"
            result="dilate"
          />
          <feOffset dx={-4.5} in="dilate" result="offset" />
          <feGaussianBlur in="offset" stdDeviation={5.8} result="blur" />
          <feComponentTransfer in="blur" result="shadow">
            <feFuncA type="linear" slope={0.8} intercept={-0.2} />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="comp-extrude" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-extrude-glow)">
        <path
          d="M164.565 82.542l12.93-1.15q-4.61 10.11-4.61 21.82-1.73 1.22-4.26 1.22t-4.13-1.18q-1.6-1.19-1.92-2.4-1.6 1.66-4.19 2.62-2.59.96-5.34.96t-5.15-.9q-2.4-.89-4.26-2.88-4.1-4.35-4.1-12.6 0-12.8 6.85-20.48 7.04-7.94 19.52-7.94 8.64 0 11.71 4.48.96 1.41.96 3.1 0 1.7-.73 3.14-.74 1.44-1.89 2.59-2.75 2.56-6.14 2.56-1.35 0-2.63-.45.26-1.92.26-4.16t-.16-3.26q-.16-1.02-.55-1.86-.83-1.72-2.65-1.72-1.83 0-3.84 1.95-2.02 1.95-3.62 5.15-3.52 7.17-3.52 15.81 0 3.97 1.54 6.78 1.66 3.07 4.61 3.07 1.02 0 1.95-.51.93-.51 1.31-.89l2.05-12.87zm36.09 2.63q2.31-4.1 2.31-8.26 0-2.75-1.99-2.75-1.53 0-3.13 2.62-1.67 2.63-2.18 6.02l-3.33 20.35-13.24 1.28 6.52-33.92 10.56-1.28-1.15 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.69-.76zm33.86 15.29q-3.07 3.97-10.69 3.97-3.97 0-6.85-2.4-2.88-2.4-2.88-5.86 0-1.92.2-2.88l4.28-22.78 13-1.28-4.68 24.7q-.25 1.41-.25 2.24 0 3.72 2.24 3.72 2.49 0 4.29-3.4.57-1.08.83-2.49l4.54-23.49 12.61-1.28-4.74 24.96q-.19.96-.19 1.98 0 1.03.58 2.15.57 1.12 2.43 1.37-.38 1.54-1.73 2.56-2.81 2.18-5.85 2.18-3.04 0-4.84-1.09-1.79-1.09-2.3-2.88zm49.92-1.69q-2.69 2.72-6.37 4.19-3.68 1.47-7.33 1.47-3.64 0-4.92-.64l-1.99 10.88-12.99 1.28 8.83-45.44 10.43-1.09-.83 4.42q2.69-4.55 8.26-4.55 6.27 0 9.6 4.04 2.94 3.64 2.94 9.21t-1.47 9.54q-1.47 3.97-4.16 6.69zm-14.46-17.96l-3.4 18.76q1.35 1.15 3.01 1.15 1.67 0 2.63-.64t1.66-1.92q1.92-3.46 3.46-13.95.44-3.08.44-6.08 0-3.01-.67-3.97-.67-.96-1.95-.96-3.9 0-5.18 7.61zm37.88 23.62q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.5 16.19-5.38 5.89-14.6 5.89zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.37 6.69-.77 4.09-.77 9.15 0 1.66.54 2.75.55 1.09 2.02 1.09t2.4-.7q.93-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62zm41.34 4.1q.9-2.37.9-4.42 0-3.78-3.07-3.78-1.6 0-2.92 1.44-1.31 1.44-1.31 3.24 0 1.28 1.03 2.3 1.47 1.41 5.24 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.83-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96 1.03-.96 1.03-2.62 0-3.26-5.51-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.21-2.43 3.45-4.16 4.68-3.58 12.8-3.58 4.16 0 6.63 1.66 2.46 1.67 2.46 4.48 0 2.82-1.69 4.42-1.7 1.6-4.77 1.6-2.11 0-3.14-.7z"
          fill="#009ad0"
        />
      </g>
      <style />
    </svg>
  )
}

export default GruposLiteral

import { SVGProps } from 'react'

export const SortUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={'8'}
    height={'6'}
    viewBox={'0 0 8 6'}
    fill={'none'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'M4 0L7.4641 6H0.535898L4 0Z'} fill={'currentColor'} />
  </svg>
)

export const SortDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={'8'}
    height={'6'}
    viewBox={'0 0 8 6'}
    fill={'none'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'M4 6L0.535898 0H7.4641L4 6Z'} fill={'currentColor'} />
  </svg>
)

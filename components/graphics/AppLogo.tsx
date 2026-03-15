import Image from 'next/image'
import logo from '@/public/globe.svg'
import { getAppName } from '@/utils/app'

export default function AppLogo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        className="w-5 h-auto block"
        src={logo}
        alt={`${getAppName()} logo`}
        width={100}
        height={100}
      />
      <span className="text-base font-bold">{getAppName()}</span>
    </div>
  )
}

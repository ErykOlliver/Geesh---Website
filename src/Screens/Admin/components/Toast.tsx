import { AlertTriangle, Ban, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react'
type toasType = 'alert' | 'error' | 'sucess'

export type toastProps = {
    title: string;
    desc: string;
    type: toasType;
    duration: number;
    onClose: () => void
}


export default function Toast(props: toastProps) {
    const [visible, setVisible] = useState(true)
    // const [enableAnim, ActiveAnim] = useState(false)

    useEffect(() => {
        // ActiveAnim(true)
        const timer = setTimeout(() => {
            setVisible(false);
            // ActiveAnim(false)
            if (props.onClose) props.onClose();
        }, props.duration)
        return () => clearTimeout(timer)
    }, [props.duration, props.onClose])

    if (!visible) return null;

    const renderToast = () => {
        switch (props.type) {
            case 'alert':
                return (
                    <div className='bg-ember-soot rounded-sm gap-2.5 px-2.5 py-1 text-white border border-flame-sigil w-full h-full flex justify-start items-center'>
                        {<AlertTriangle size={32} />}
                        <article className='text-start font-Inria'>
                            <h2 className='font-bold text-base'>{props.title}</h2>
                            <p className='text-sm text-white/80'>{props.desc}</p>
                        </article>
                    </div>
                )
            case 'error':
                return (
                    <div className='bg-crimson-abyss rounded-sm gap-2.5 px-2.5 py-1 text-white border border-blood-oath w-full h-full flex justify-start items-center'>
                        {<Ban size={32} />}
                        <article className='text-start font-Inria'>
                            <h2 className='font-bold text-base'>{props.title}</h2>
                            <p className='text-sm text-white/80'>{props.desc}</p>
                        </article>
                    </div>
                )
            case 'sucess':
                return (
                    <div className='bg-abyssal-emerald rounded-sm gap-2.5 px-2.5 py-1 text-white border border-verdant-rite w-full h-full flex justify-start items-center'>
                        {<CheckCircle size={32} />}
                        <article className='text-start font-Inria'>
                            <h2 className='font-bold text-base'>{props.title}</h2>
                            <p className='text-sm text-white/80'>{props.desc}</p>
                        </article>
                    </div>
                )
        }
    }
    return (
        <div className={`w-full h-full`}>
            {renderToast()}
        </div>
    )
}

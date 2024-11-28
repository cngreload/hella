'use client';
import { useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { GoogleGeminiEffect2 } from '@/components/ui/google-gemini-effect2';
import HeroEdit from './HeroEdit';
import Section from './Section';

export function Gem2 ()
{
    const ref = React.useRef( null );
    const { scrollYProgress } = useScroll( {
        target: ref,
        offset: [ 'start start', 'end start' ],
    } );

    const pathLengthFirst = useTransform( scrollYProgress, [ 0, 0.8 ], [ 0.2, 1.2 ] );
    const pathLengthSecond = useTransform( scrollYProgress, [ 0, 0.8 ], [ 0.15, 1.2 ] );
    const pathLengthThird = useTransform( scrollYProgress, [ 0, 0.8 ], [ 0.1, 1.2 ] );
    const pathLengthFourth = useTransform( scrollYProgress, [ 0, 0.8 ], [ 0.05, 1.2 ] );
    const pathLengthFifth = useTransform( scrollYProgress, [ 0, 0.8 ], [ 0, 1.2 ] );

    return (
        <div
            className="h-[300vh]  bg-white w-full dark:border dark:border-white/[0.1] rounded-md sticky pt-20 md:pt-40 overflow-clip"
            ref={ ref }
        >
            <GoogleGeminiEffect2
                pathLengths={ [
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ] }
            />

        </div>
    );
}

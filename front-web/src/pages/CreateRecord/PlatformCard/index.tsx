import React from 'react';
import { GamePlatform } from '../types'
import './styles.css'

type Props = {
    platform: GamePlatform;
    onChange: (platform: GamePlatform) => void;
    activePlatform?: GamePlatform;
}

const PlatformCard = ({
    platform,
    onChange,
    activePlatform
}: Props) => {
    const isActive = platform === activePlatform ? 'active' : 'inactive';

    return (
        <button
            className={`platform-card-${isActive}`}
            onClick={() => onChange(platform)}
        >
            <span
                className={`platform-card-text-${isActive}`}
            >
                {platform}
            </span>
        </button>
    )
}

export default PlatformCard;
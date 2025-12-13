import arrowImg from '@/assets/decorations/arrow.svg';
import cherryImg from '@/assets/decorations/cherry.svg';
import coinArrow1Img from '@/assets/decorations/coin-arrows-1.svg';
import coinSmile1Img from '@/assets/decorations/coin-smile-1.svg';
import crownImg from '@/assets/decorations/crown.svg';
import diamondImg from '@/assets/decorations/diamond.svg';
import lemonImg from '@/assets/decorations/lemon.svg';
import sevenImg from '@/assets/decorations/seven.svg';
import emotionImg from '@/assets/graphics/slots-game/emotion.svg';
import footsImg from '@/assets/graphics/slots-game/foots.svg';
import leftEyeImg from '@/assets/graphics/slots-game/left-eye.svg';
import leftHandImg from '@/assets/graphics/slots-game/left-hand.svg';
import rightEyeImg from '@/assets/graphics/slots-game/right-eye.svg';
import rightHandImg from '@/assets/graphics/slots-game/right-hand.svg';
import smileImg from '@/assets/graphics/slots-game/smile.svg';
import BlushMotion from '@/features/slots-game/animations/BlushMotion';
import CherryPeekMotion from '@/features/slots-game/animations/CherryPeekMotion';
import CoinArrowSwayMotion from '@/features/slots-game/animations/CoinArrowSwayMotion';
import CoinArrowWaveMotion from '@/features/slots-game/animations/CoinArrowWaveMotion';
import CoinSmileFlipMotion from '@/features/slots-game/animations/CoinSmileFlipMotion';
import CoinSmileMotion from '@/features/slots-game/animations/CoinSmileMotion';
import CrownMotion from '@/features/slots-game/animations/CrownMotion';
import DiamondPeekMotion from '@/features/slots-game/animations/DiamondPeekMotion';
import EyeMotion from '@/features/slots-game/animations/EyeMotion';
import FootsMotion from '@/features/slots-game/animations/FootsMotion';
import HandSwayMotion from '@/features/slots-game/animations/HandSwayMotion';
import HandWaveMotion from '@/features/slots-game/animations/HandWaveMotion';
import LemonMotion from '@/features/slots-game/animations/LemonMotion';
import SevenFloatMotion from '@/features/slots-game/animations/SevenFloatMotion';
import SmileMotion from '@/features/slots-game/animations/SmileMotion';
import { CoinBtn } from '@/types/slots-game';

export const STORAGE_KEY = 'tokyo-slots-storage';

export const REELS_COUNT = 4;
export const SYMBOLS_COUNT = 4;
export const SPIN_SPEED_MS = 90;
export const REEL_DELAYS_MS = [1200, 1600, 2000, 2400];

export const coinBtns: CoinBtn[] = [
  {
    icon: arrowImg,
    iconWidth: 14,
    iconHeight: 23,
    position: 'absolute',
    top: '10px',
    left: '10px',
  },
  {
    icon: arrowImg,
    iconWidth: 14,
    iconHeight: 23,
    position: 'absolute',
    top: '10px',
    right: '10px',
    reverse: true,
  },
];

export const decorationsConfig = [
  {
    id: 'crown',
    Motion: CrownMotion,
    className: 'crown',
    img: crownImg,
    width: 41,
    height: 37,
    alt: 'crown-image',
  },
  {
    id: 'coinSmile1',
    Motion: CoinSmileMotion,
    className: 'coinSmile1',
    img: coinSmile1Img,
    width: 32,
    height: 31,
    alt: 'coin-smile-image',
  },
  {
    id: 'coinArrow1',
    Motion: CoinArrowWaveMotion,
    className: 'coinArrow1',
    img: coinArrow1Img,
    width: 36,
    height: 36,
    alt: 'coin-arrow-image',
  },
  {
    id: 'diamond',
    Motion: DiamondPeekMotion,
    className: 'diamond',
    img: diamondImg,
    width: 50,
    height: 50,
    alt: 'diamond-image',
  },
  {
    id: 'coinArrow2',
    Motion: CoinArrowSwayMotion,
    className: 'coinArrow2',
    img: coinArrow1Img,
    width: 36,
    height: 36,
    alt: 'coin-arrow-image',
  },
  {
    id: 'cherry',
    Motion: CherryPeekMotion,
    className: 'cherry',
    img: cherryImg,
    width: 54,
    height: 96,
    alt: 'cherry-image',
  },
  {
    id: 'coinSmile2',
    Motion: CoinSmileFlipMotion,
    className: 'coinSmile2',
    img: coinSmile1Img,
    width: 111,
    height: 110,
    alt: 'coin-smile-image',
  },
  {
    id: 'seven1',
    Motion: SevenFloatMotion,
    className: 'seven1',
    img: sevenImg,
    width: 35,
    height: 32,
    alt: 'seven-image',
  },
  {
    id: 'seven2',
    Motion: SevenFloatMotion,
    className: 'seven2',
    img: sevenImg,
    width: 35,
    height: 32,
    alt: 'seven-image',
    delay: 0.6,
  },
  {
    id: 'lemon',
    Motion: LemonMotion,
    className: 'lemon',
    img: lemonImg,
    width: 58,
    height: 50,
    alt: 'lemon-image',
  },
];

export const backgroundDecorations = [
  { id: 'greenCloud', className: 'cloudGreenBackground' },
  { id: 'whiteCloud', className: 'cloudWhiteBackground' },
  { id: 'cloudLeft', className: 'cloudLeft' },
  { id: 'cloudRight', className: 'cloudRight' },
  { id: 'city', className: 'city' },
];

export const blushConfig = [
  {
    Motion: BlushMotion,
    className: 'emotionLeft',
    img: emotionImg,
    width: 44,
    height: 6,
    alt: 'emotion-left',
  },
  {
    Motion: BlushMotion,
    className: 'emotionRight',
    img: emotionImg,
    width: 44,
    height: 6,
    alt: 'emotion-right',
  },
];

export const bodyPartsConfig = [
  {
    Motion: HandWaveMotion,
    className: 'handLeft',
    img: leftHandImg,
    width: 56,
    height: 51,
    alt: 'left-hand',
  },
  {
    Motion: HandSwayMotion,
    className: 'handRight',
    img: rightHandImg,
    width: 56,
    height: 51,
    alt: 'right-hand',
  },
  {
    Motion: FootsMotion,
    className: 'foots',
    img: footsImg,
    width: 370,
    height: 33,
    alt: 'foots',
  },
];

export const faceConfig = [
  {
    Motion: EyeMotion,
    className: 'eyeLeft',
    img: leftEyeImg,
    width: 48,
    height: 46,
    alt: 'left-eye',
  },
  {
    Motion: EyeMotion,
    className: 'eyeRight',
    img: rightEyeImg,
    width: 48,
    height: 46,
    alt: 'right-eye',
  },
  {
    Motion: SmileMotion,
    className: 'smile',
    img: smileImg,
    width: 25,
    height: 13,
    alt: 'smile',
  },
];

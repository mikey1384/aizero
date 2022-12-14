import { Color } from '~/constants/css';

export const clientVersion = '0.0.1';
export const CHAT_ID_BASE_NUMBER = import.meta.env.VITE_CHAT_ID_BASE_NUMBER;
export const DEFAULT_PROFILE_THEME = 'logoBlue';
export const DESCRIPTION_LENGTH_FOR_EXTRA_REWARD_LEVEL = 1000;
export const FILE_UPLOAD_XP_REQUIREMENT = 0;
export const GENERAL_CHAT_ID = 2;
export const GENERAL_CHAT_PATH_ID =
  Number(GENERAL_CHAT_ID) + Number(CHAT_ID_BASE_NUMBER);
export const GITHUB_APP_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
export const MAX_PROFILE_PIC_SIZE = 10000;
export const S3URL = `https://${
  import.meta.env.VITE_AWS_S3_BUCKET_NAME
}.s3.amazonaws.com`;
export const REWARD_VALUE = 200;
export const SELECTED_LANGUAGE = import.meta.env.VITE_SELECTED_LANGUAGE || 'en';
export const mb = 1000;
export const VOCAB_CHAT_TYPE = 'vocabulary';
export const AI_DRAWING_CHAT_TYPE = 'ai-image-cards';

export const cardProps = {
  common: [],
  superior: ['glowy'],
  rare: ['glowy', 'glossy'],
  elite: ['glowy', 'glossy', 'grad'],
  legendary: ['glowy', 'glossy', 'sparky', 'grad']
};

export const qualityProps = {
  common: {
    color: Color.vantaBlack(),
    fontWeight: 'normal'
  },
  superior: {
    color: Color.limeGreen(),
    fontWeight: 'bold'
  },
  rare: {
    color: Color.purple(),
    fontWeight: 'bold'
  },
  elite: {
    color: Color.redOrange(),
    fontWeight: 'bold'
  },
  legendary: {
    color: Color.darkGold(),
    fontWeight: 'bold'
  }
};

export const videoRewardHash = {
  0: {
    xp: 20,
    coin: 2
  },
  1: {
    xp: 25,
    coin: 2
  },
  2: {
    xp: 30,
    coin: 2
  },
  3: {
    xp: 35,
    coin: 3
  },
  4: {
    xp: 40,
    coin: 3
  },
  5: {
    xp: 45,
    coin: 3
  },
  6: {
    xp: 50,
    coin: 4
  },
  7: {
    xp: 55,
    coin: 4
  },
  8: {
    xp: 60,
    coin: 4
  },
  9: {
    xp: 65,
    coin: 4
  },
  10: {
    xp: 70,
    coin: 5
  }
};

export const cardLevelHash = {
  1: {
    color: 'logoBlue',
    label: 'blue'
  },
  2: {
    color: 'pink',
    label: 'pink'
  },
  3: {
    color: 'orange',
    label: 'orange'
  },
  4: {
    color: 'magenta',
    label: 'magenta'
  },
  5: {
    color: 'gold',
    label: 'gold'
  }
};

export const rewardReasons = {
  1: {
    color: 'pink',
    icon: 'certificate',
    message: 'for being thoughtful'
  },
  2: {
    color: 'logoBlue',
    icon: 'comments',
    message: 'for posting something related to the subject'
  },
  3: {
    color: 'orange',
    icon: 'surprise',
    message: 'for posting something awesome'
  },
  4: {
    color: 'gold',
    icon: 'bolt',
    message: 'for putting in a lot of effort'
  },
  5: {
    color: 'green',
    icon: 'check-circle',
    message: 'for participating in a group project or event'
  }
};

export const maxSizes = [300, 400, 500, 650, 800, 1000, 1500, 2000];

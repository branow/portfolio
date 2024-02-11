

export function getVideoPlayerDimensions(screenWidth: number) {
  const w = screenWidth * getFillerConstant(screenWidth);
  return {
    width: w,
    height: w / 2
  }
}


function getFillerConstant(screenWidth: number): number {
  if (screenWidth < 640) {
    return 0.9;
  } else if (screenWidth < 768) {
    return 0.9;
  } else if (screenWidth < 1024) {
    return 0.9;
  } else if (screenWidth < 1280) {
    return 0.85;
  } else if (screenWidth < 1536) {
    return 0.7;
  } else {
    return 0.6;
  }
}


import React from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import BuildName from './BuildName';

const Container = styled(AppBar)`
  background: #060606;
`;

const ToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const LogoDiv = styled(Box)`
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 999px;
  padding: 8px;
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.4);
`;

const HeaderLogo = (
  <svg
    width='100%'
    height='100%'
    viewBox='0 0 509.25 509.25'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M506.7 70.805l-160.39 160.39a78.534 78.534 0 0152.5 52.5l160.39-160.39c-3.598-27.363-25.137-48.902-52.5-52.5zM332.29 245.86l-17.285 69.137 69.137-17.285c-3.8-26.891-24.961-48.051-51.852-51.852zM584.12 45.875c-14.496-14.496-38.004-14.496-52.5 0l-10.316 10.316a78.526 78.526 0 0152.5 52.5l10.316-10.316c14.5-14.5 14.5-38.004 0-52.5zM210 35L105 140h105z'
      transform='translate(-91.976 -21.784)'
    />
    <path
      d='M400.81 306.45c-3.313 3.313-7.379 5.625-11.688 7.379-.543.297-1.102.504-1.71.683-.977.34-1.86.895-2.868 1.145l-65.31 16.316c-11.374 2.844-21.737-5.992-21.698-16.973h-131.29c-4.836 0-8.75-3.914-8.75-8.75s3.914-8.75 8.75-8.75h135.08l8.754-35H166.24c-4.836 0-8.75-3.914-8.75-8.75s3.914-8.75 8.75-8.75h148.28c1.582-5.969 4.656-11.441 9.027-15.809L342.738 210h-176.5c-4.836 0-8.75-3.914-8.75-8.75s3.914-8.75 8.75-8.75h194l112.25-112.25V52.5c0-9.664-7.836-17.5-17.5-17.5h-227.5v105c0 9.664-7.836 17.5-17.5 17.5h-105c-.004 72.871-.004 350-.004 350 0 9.664 7.836 17.5 17.5 17.5h332.5c9.664 0 17.5-7.836 17.5-17.5V234.75zM242.43 475.06a8.75 8.75 0 01-6.188 14.938 8.735 8.735 0 01-6.187-2.563l-52.5-52.5a8.75 8.75 0 010-12.375l52.5-52.5c3.418-3.418 8.957-3.418 12.375 0s3.418 8.957 0 12.375l-46.312 46.312zm72.109-96.043l-35 105a8.752 8.752 0 01-8.297 5.98 8.698 8.698 0 01-2.77-.445c-4.581-1.539-7.058-6.496-5.527-11.074l35-105a8.737 8.737 0 0111.066-5.539c4.582 1.543 7.059 6.496 5.528 11.078zm85.391 55.918l-52.5 52.5c-1.71 1.707-3.95 2.563-6.188 2.563s-4.476-.856-6.187-2.563a8.75 8.75 0 010-12.375l46.316-46.312-46.312-46.312c-3.418-3.418-3.418-8.957 0-12.375s8.957-3.418 12.375 0l52.5 52.5a8.753 8.753 0 01-.004 12.375z'
      transform='translate(-91.976 -21.784)'
    />
  </svg>
);

const Header = () => {
  return (
    <Container position='static'>
      <ToolBar>
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <LogoDiv>{HeaderLogo}</LogoDiv>&nbsp;&nbsp;Kodepen
        </Box>
        <BuildName />

        <Box>
          <>
            <a
              href='https://github.com/fullyDeepak/Kodepen'
              className='github-corner'
              aria-label='View source on GitHub'>
              <svg
                width={65}
                height={65}
                viewBox='0 0 250 250'
                style={{
                  fill: '#1e1e1e',
                  color: '#fff',
                  position: 'absolute',
                  top: 0,
                  border: 0,
                  right: 0,
                }}
                aria-hidden='true'>
                <path d='M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z' />
                <path
                  d='M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2'
                  fill='currentColor'
                  style={{ transformOrigin: '130px 106px' }}
                  className='octo-arm'
                />
                <path
                  d='M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z'
                  fill='currentColor'
                  className='octo-body'
                />
              </svg>
            </a>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}',
              }}
            />
          </>
        </Box>
      </ToolBar>
    </Container>
  );
};

export default Header;

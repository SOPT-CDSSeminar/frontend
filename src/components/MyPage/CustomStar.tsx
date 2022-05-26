import theme from "../../style/theme";

interface CustomStarProps {
  starId: string;
  percentage: number;
}

export default function CustomStar(props: CustomStarProps) {
  const { starId, percentage } = props;

  return (
    <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
      <g id="icon_star" clipPath="url(#clip0_2104_20649)">
        <path
          id="Star 7"
          d="M8.36631 1.89192C8.80432 1.24555 9.75652 1.24555 10.1945 1.89192L12.3323 5.04666C12.4753 5.25761 12.6868 5.41262 12.9309 5.48542L16.5766 6.57231C17.3163 6.79283 17.6073 7.6848 17.14 8.29908L14.8117 11.3594C14.6593 11.5598 14.5799 11.8063 14.5867 12.058L14.6914 15.9059C14.7125 16.683 13.9454 17.2381 13.2139 16.975L9.65411 15.6948C9.41256 15.6079 9.14828 15.6079 8.90673 15.6948L5.34698 16.975C4.61547 17.2381 3.84835 16.683 3.86948 15.9059L3.97412 12.058C3.98096 11.8063 3.90158 11.5598 3.74912 11.3594L1.42088 8.29908C0.953552 7.6848 1.24454 6.79283 1.98421 6.57231L5.62989 5.48542C5.87408 5.41262 6.08557 5.2576 6.22852 5.04666L8.36631 1.89192Z"
          fill={`url(#progress-${starId})`}
        />
      </g>
      <defs>
        <linearGradient id={`progress-${starId}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset={`${percentage}`} stopColor={theme.colors.ohou_skyblue} />
          <stop offset={`${percentage}`} stopColor={theme.colors.ohou_gray03} />
        </linearGradient>
      </defs>
    </svg>
  );
}

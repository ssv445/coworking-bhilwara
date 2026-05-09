interface Props {
  size?: number;
  variant?: 'header' | 'hero';
}

export default function Logo({ size = 22, variant = 'header' }: Props) {
  const src = variant === 'hero' ? '/images/homepage/logo-hero.png' : '/images/homepage/logo-header.png';
  return (
    <img
      src={src}
      alt="Ready CoWork Bhilwara"
      width={size}
      height={size}
      style={{ height: size, width: 'auto', display: 'block' }}
    />
  );
}

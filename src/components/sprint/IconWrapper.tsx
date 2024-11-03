import React from "react";

interface IconWrapperProps {
  Icon: React.ElementType;
  testId: string;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  Icon,
  testId,
  className,
}) => {
  return <Icon data-testid={testId} className={className} />;
};

export default IconWrapper;

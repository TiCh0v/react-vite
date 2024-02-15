import { Card, Metric, Text, Flex, BadgeDelta } from '@tremor/react';

export function CardUsageExample() {
  return (
    <Card
      className="w-xs"
      decoration="top"
      decorationColor="indigo"
    >
      <div className='flex justify-between '>
          <div>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
          </div>
          <BadgeDelta className='h-6' deltaType="moderateDecrease" isIncreasePositive={true}>21.2%</BadgeDelta>
      </div>
      
    </Card>
  );
}

export default CardUsageExample
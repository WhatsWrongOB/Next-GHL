// context/OrderProviderWrapper.tsx
'use client';
import { OrderProvider } from './OrderContext';

export default function OrderProviderWrapper({ children }: { children: React.ReactNode }) {
	return <OrderProvider>{children}</OrderProvider>;
}

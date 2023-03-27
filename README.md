This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


## 产品设计文档

ProgramerX是一个连接程序员培训机构与项目方的中间平台。
主要包含集成了第三方的NFT上架、铸造、转换、销毁功能，转换又包含5个1星兑换1个2星，3个2星兑换1个3星的机制。

星的等级越高，可享受的VIP服务待遇就越高，
  - 销毁1个1星的SBT可兑换1个咨询的SBT，可联系客服预约咨询时间。
  - 销毁1个2星的SBT可兑换1个跟踪服务套餐，包括项目方的工作联系，面试1V1指导等。
  - 销毁1个3星的SBT可兑换1个包就业的服务套餐，直接进入项目方工作。
星的获取来自培训网站课程的学习。
  - 课程为付费课程
  - 课程也分星级
    1. 完成1个1星课程可以铸造获得1个1星的SBT。
    2. 2星的课程包含5个1星的课程，只是在价格定位上更优惠。
    3. 3星的课程包含3个2星的课程，价格上最优惠.









Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

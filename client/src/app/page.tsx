import ActionAreaCard from "@/components/Cards";
import FastDelivery from "@/components/FastDelivery";
import BasicCard from "@/components/FastDelivery";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box, Stack } from "@mui/material";

function Home() {
  return (
    <Stack>
      <Box>
        <Navbar />
        <Box
          sx={{ display: "flex", gap: "47px", width: "1200px", margin: "auto" }}
        >
          <FastDelivery
            text="Хүргэлтийн төлөв хянах"
            text1="Захиалга бэлтгэлийн явцыг хянах"
          />
          <FastDelivery
            text="Хүргэлтийн төлөв хянах"
            text1="Захиалга бэлтгэлийн явцыг хянах"
          />
          <FastDelivery
            text="Хүргэлтийн төлөв хянах"
            text1="Захиалга бэлтгэлийн явцыг хянах"
          />
          <FastDelivery
            text="Хүргэлтийн төлөв хянах"
            text1="Захиалга бэлтгэлийн явцыг хянах"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <ActionAreaCard
            image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KA0seZMfBI4cfT2mi3IslQI6oxPPtt8IC5fGuzEHfNWIVx1hMieo0vnt1dCKywqoOffZtglxdW4pP7kV9cwOAguidwu3r4p-99QxAAgvG8tnyZG4inP7BZg7otJydZZNtFd0YJ3LTlq9S59HuZWQKn45qdkyFAe17K4Drz2LtqzimvNKNJ49mhqS~rlej5tfz876iy8tme9VR--rGYzgF~Vy167l5VVbuKqbaJe2c0zFgtdqpHyddFB3N6Rl0KO54kGCMTWVZsOhNQpDpaHhHTdm3WTBgKUrv7JIbyeWRjG2~UXxvxyviSCvsQcbZs3oNX695ZwVLneI1976CC6PGQ__"
            text="asdfdsdfasdf"
            price="16,800"
          />
          <ActionAreaCard
            image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KA0seZMfBI4cfT2mi3IslQI6oxPPtt8IC5fGuzEHfNWIVx1hMieo0vnt1dCKywqoOffZtglxdW4pP7kV9cwOAguidwu3r4p-99QxAAgvG8tnyZG4inP7BZg7otJydZZNtFd0YJ3LTlq9S59HuZWQKn45qdkyFAe17K4Drz2LtqzimvNKNJ49mhqS~rlej5tfz876iy8tme9VR--rGYzgF~Vy167l5VVbuKqbaJe2c0zFgtdqpHyddFB3N6Rl0KO54kGCMTWVZsOhNQpDpaHhHTdm3WTBgKUrv7JIbyeWRjG2~UXxvxyviSCvsQcbZs3oNX695ZwVLneI1976CC6PGQ__"
            text="asdfdsdfasdf"
            price="6,800"
          />
          <ActionAreaCard
            image="https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZTYGXkdrBGE~om1HZ2Bo7yJU1lzitXIddPJ6wM56sVkdEwH8CxhYOBN-uNGjfMgzRW11AWFiKLlgRrttYbEcjjn-IeI7gg1Y0uiSKlpidpSIpgu4kDf82u-3QUuVGDWG1MgbmGjp~em45L0gQisu38m7ir8fII5qPgOEnVtE-rvB5zQcvPrZRgL6vz0wcH~kwMnN6Z6d7rQCfqkgZLyiYB7lRo4GEKSESa-BHe3YptjmvGJCIaJNHskU0GXzuZf-4v48Te~NjBC0Clg03itgYUuwlvG8YKaeBgfl6KZKqUqgZ0Q3Z9oh0uOAe6V2KEzHY8atiy5LxqalO~LUMwB2Kg__"
            text="asdfdsdfasdf"
            price="26,800"
          />
          <ActionAreaCard
            image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KA0seZMfBI4cfT2mi3IslQI6oxPPtt8IC5fGuzEHfNWIVx1hMieo0vnt1dCKywqoOffZtglxdW4pP7kV9cwOAguidwu3r4p-99QxAAgvG8tnyZG4inP7BZg7otJydZZNtFd0YJ3LTlq9S59HuZWQKn45qdkyFAe17K4Drz2LtqzimvNKNJ49mhqS~rlej5tfz876iy8tme9VR--rGYzgF~Vy167l5VVbuKqbaJe2c0zFgtdqpHyddFB3N6Rl0KO54kGCMTWVZsOhNQpDpaHhHTdm3WTBgKUrv7JIbyeWRjG2~UXxvxyviSCvsQcbZs3oNX695ZwVLneI1976CC6PGQ__"
            text="asdfdsdfasdf"
            price="26,800"
          />
        </Box>

        <Footer />
      </Box>
    </Stack>
  );
}
export default Home;

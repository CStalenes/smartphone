import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
//import imgBanner from "../assets/images/banner/phone_banner.jpg";
//import { imgBanner } from "../../data";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../style/banner";
//import phoneBanner from '../../src/phone_banner.jpg';
//si le chemin n est pas implicitement indique dans l ecriture ya erreur
import phoneBanner from '../banner/phone_banner.jpg';


export default function Banner(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src = {phoneBanner}/>
            <BannerContent>
                <Typography variant = "h6"> Nouvelle Collection </Typography>
                <BannerTitle variant = "h2"> My Phone</BannerTitle>
                <BannerDescription variant = "subtitle"> Venez découvrir nos offre spéciales sur une bonne 
                majorité des derniers smartphones
                </BannerDescription>
                <BannerShopButton color = "primary"> Decouvrir </BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );

}
import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import { GooglePlayButton } from "react-mobile-app-button";
import { PageAnimationWrapper } from "../Components/PageAnimationWrapper";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../i18n.js";

export default function Landing() {
	const { t, i18n } = useTranslation();
	const APKUrl = "https://play.google.com/store/apps/details?id=com.afkanerd.sw0b";

	const isRTL = i18n.language === "fa";

	return (
		<>
			<PageAnimationWrapper>
				<Box
					dir={isRTL ? "rtl" : "ltr"}
					sx={{
						backgroundColor: "background.paper",
						position: "relative",
						pt: 4,
						pb: { xs: 8, md: 10 }
					}}
				>
					{/* Banner Page */}
					<Container maxWidth="lg">
						<Grid container spacing={0} sx={{ flexDirection: { xs: "column", md: "unset" } }}>
							<Grid item xs={12} md={7}>
								<Box
									sx={{
										textAlign: { xs: "center", md: "left" },
										height: "100%",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center"
									}}
								>
									<Box sx={{ mb: 3 }}>
										<Typography
											component="h2"
											sx={{
												position: "relative",
												fontSize: { xs: 40, md: 72 },
												letterSpacing: 1.5,
												fontWeight: "bold",
												lineHeight: 1.3,
												mb: 2
											}}
										>
											<Typography
												component="mark"
												sx={{
													position: "relative",
													color: "primary.main",
													fontSize: "inherit",
													fontWeight: "inherit",
													backgroundColor: "unset",
													mb: 2
												}}
											>
												{t("Landing.landingh1a")}
												<Box
													sx={{
														position: "absolute",
														top: { xs: 24, md: 34 },
														left: 2,
														transform: "rotate(3deg)",
														"& img": { width: { xs: 146, md: 210 }, height: "auto" }
													}}
												></Box>
											</Typography>
											{t("Landing.landingh1")}
										</Typography>
									</Box>
									<Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
										<Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
											{t("Landing.landingh2")}
										</Typography>
									</Box>

									{/*  */}
									<Box sx={{ "& button": { mr: 2 } }}>
										{/*  */}
										<Button>
											<GooglePlayButton
												color="primary"
												url={APKUrl}
												height={52}
												theme="dark"
												width={250}
												fontSize={10}
												className={"custom-style"}
											/>
											{/* {t("Landing.Android")} */}
										</Button>
										{/*  */}
										<Button color="primary" variant="outlined">
											{t("Landing.Desktop")}
										</Button>
									</Box>
									{/*  */}
								</Box>
							</Grid>
							<Grid item xs={12} md={4} my={"auto"} sx={{ position: "relative", marginTop: 4 }}>
								<Box
									component="img"
									src="/phonem.png"
									alt="image"
									sx={{
										width: { md: "100%", xs: "60%", mx: "center" },
										maxWidth: "80%",
										height: "auto",
										transform: "rotate(10deg)"
									}}
								/>
							</Grid>
						</Grid>
					</Container>
					{/*======================================= end of Hero section -------------------------------------*/}

					{/* ------------------------------------------Start of how it works section------------------------ */}
					<Container fluid="lg">
						<Grid spacing={0} sx={{ flexDirection: { xs: "column", md: "unset" } }}>
							<Typography
								align="center"
								variant="h4"
								sx={{ fontWeight: 700, fontSize: { xs: "25px", md: "33px" }, mb: 2 }}
							>
								{t("Howitworks.HowItWorks")}
							</Typography>
							<Typography
								variant="subtitle1"
								align="center"
								sx={{ mb: 4, fontSize: { xs: "18px", md: "20px" } }}
							>
								{t("Howitworks.HowItWorksSubtitle")}
							</Typography>
							{/* first row */}
							<Row className="justify-content-center">
								<Col xs={12} md={6} lg={3} className="mb-4 d-flex">
									<Card className="w-100 equal-card hover-shadow">
										<Card.Img variant="top" src="/permission.png" />
										<Card.Body>
											<Card.Text>{t("Howitworks.HowItWorksD")}</Card.Text>
										</Card.Body>
									</Card>
								</Col>
								<Col xs={12} md={6} lg={3} className="mb-4 d-flex">
									<Card className="w-100 equal-card hover-shadow">
										<Card.Img variant="top" src="/composeMessage.png" />
										<Card.Body>
											<Card.Text>{t("Howitworks.HowItWorksB")}</Card.Text>
										</Card.Body>
									</Card>
								</Col>
							</Row>
							{/* second row */}
							<Row className="justify-content-center">
								<Col xs={12} md={6} lg={3} className="mb-4 d-flex">
									<Card className="w-100 equal-card hover-shadow">
										<Card.Img variant="top" src="/Online-world.png" />
										<Card.Body>
											<Card.Text>{t("Howitworks.HowItWorksC")}</Card.Text>
										</Card.Body>
									</Card>
								</Col>
								<Col xs={12} md={6} lg={3} className="mb-4 d-flex">
									<Card className="w-100 equal-card hover-shadow">
										<Card.Img variant="top" src="/recievedNotification.png" />
										<Card.Body>
											<Card.Text>{t("Howitworks.HowItWorksD")}</Card.Text>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Grid>
					</Container>

					{/* -------------------------------------========= End ==========------------------------------- */}

					{/*  */}
				</Box>
			</PageAnimationWrapper>
		</>
	);
}

import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Easy to Use",
		Svg: require("@site/static/img/easy.svg").default,
		description: (
			<>
				Just run a single command and fill out a few things and...
				that's it!
			</>
		),
	},
	{
		title: "Easily Customizable",
		Svg: require("@site/static/img/customizable.svg").default,
		description: (
			<>
				Add ESLint and/or Prettier, use Typescript or just plain 
				javascript, use default console logging or Pino.
			</>
		),
	},
	{
		title: "Lightweight",
		Svg: require("@site/static/img/fast.svg").default,
		description: (
			<>
				Only a few KBs unpacked, and only 3 dependencies, it's quick to
				download and quick to run as well!
			</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}

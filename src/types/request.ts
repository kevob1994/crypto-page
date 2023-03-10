export interface ICoins {
	id: string;
	symbol: string;
	name: string;
	image: string;
	current_price: number;
	market_cap: number;
	market_cap_rank: number;
	fully_diluted_valuation: number;
	total_volume: number;
	high_24h: number;
	low_24h: number;
	price_change_24h: number;
	price_change_percentage_24h: number;
	market_cap_change_24h: number;
	market_cap_change_percentage_24h: number;
	circulating_supply: number;
	total_supply: number;
	max_supply: number;
	ath: number;
	ath_change_percentage: number;
	ath_date: Date;
	atl: number;
	atl_change_percentage: number;
	atl_date: Date;
	roi?: any;
	last_updated: Date;
}

export interface IHistoryCoin {
	prices: number[][];
	market_caps: number[][];
	total_volumes: number[][];
}

export interface MarketData {
	current_price: any;
	total_value_locked?: any;
	mcap_to_tvl_ratio?: any;
	fdv_to_tvl_ratio?: any;
	roi?: any;
	ath: any;
	ath_change_percentage: any;
	ath_date: any;
	atl: any;
	atl_change_percentage: any;
	atl_date: any;
	market_cap: any;
	market_cap_rank: number;
	fully_diluted_valuation: any;
	total_volume: any;
	high_24h: any;
	low_24h: any;
	price_change_24h: number;
	price_change_percentage_24h: number;
	price_change_percentage_7d: number;
	price_change_percentage_14d: number;
	price_change_percentage_30d: number;
	price_change_percentage_60d: number;
	price_change_percentage_200d: number;
	price_change_percentage_1y: number;
	market_cap_change_24h: number;
	market_cap_change_percentage_24h: number;
	price_change_24h_in_currency: any;
	price_change_percentage_1h_in_currency: any;
	price_change_percentage_24h_in_currency: any;
	price_change_percentage_7d_in_currency: any;
	price_change_percentage_14d_in_currency: any;
	price_change_percentage_30d_in_currency: any;
	price_change_percentage_60d_in_currency: any;
	price_change_percentage_200d_in_currency: any;
	price_change_percentage_1y_in_currency: any;
	market_cap_change_24h_in_currency: any;
	market_cap_change_percentage_24h_in_currency: any;
	total_supply: number;
	max_supply: number;
	circulating_supply: number;
	last_updated: Date;
}

export interface CommunityData {
	facebook_likes?: any;
	twitter_followers: number;
	reddit_average_posts_48h: number;
	reddit_average_comments_48h: number;
	reddit_subscribers: number;
	reddit_accounts_active_48h: number;
	telegram_channel_user_count?: any;
}

export interface CodeAdditionsDeletions4Weeks {
	additions: number;
	deletions: number;
}

export interface DeveloperData {
	forks: number;
	stars: number;
	subscribers: number;
	total_issues: number;
	closed_issues: number;
	pull_requests_merged: number;
	pull_request_contributors: number;
	code_additions_deletions_4_weeks: CodeAdditionsDeletions4Weeks;
	commit_count_4_weeks: number;
	last_4_weeks_commit_activity_series: number[];
}

export interface PublicInterestStats {
	alexa_rank: number;
	bing_matches?: any;
}

export interface Market {
	name: string;
	identifier: string;
	has_trading_incentive: boolean;
}

export interface ConvertedLast {
	btc: number;
	eth: number;
	usd: number;
}

export interface ConvertedVolume {
	btc: number;
	eth: number;
	usd: any;
}

export interface Ticker {
	base: string;
	target: string;
	market: Market;
	last: number;
	volume: number;
	converted_last: ConvertedLast;
	converted_volume: ConvertedVolume;
	trust_score: string;
	bid_ask_spread_percentage: number;
	timestamp: Date;
	last_traded_at: Date;
	last_fetch_at: Date;
	is_anomaly: boolean;
	is_stale: boolean;
	trade_url: string;
	token_info_url?: any;
	coin_id: string;
	target_coin_id: string;
}

export interface IDetailCoin {
	id: string;
	symbol: string;
	name: string;
	asset_platform_id?: any;
	platforms: any;
	detail_platforms: any;
	block_time_in_minutes: number;
	hashing_algorithm: string;
	categories: string[];
	public_notice?: any;
	additional_notices: any[];
	localization: any;
	description: any;
	links: any;
	image: any;
	country_origin: string;
	genesis_date: string;
	sentiment_votes_up_percentage: number;
	sentiment_votes_down_percentage: number;
	market_cap_rank: number;
	coingecko_rank: number;
	coingecko_score: number;
	developer_score: number;
	community_score: number;
	liquidity_score: number;
	public_interest_score: number;
	market_data: MarketData;
	community_data: CommunityData;
	developer_data: DeveloperData;
	public_interest_stats: PublicInterestStats;
	status_updates: any[];
	last_updated: Date;
	tickers: Ticker[];
}
